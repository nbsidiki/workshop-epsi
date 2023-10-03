import request from "superagent";
import * as session from "./session";
import { Base64 } from "js-base64";
import saveAs from "file-saver";

const prepareValidationError = (_error: any) => {
  const error = _error;
  if (!error) {
    return error;
  }

  if (error.code === 404) {
    error["_error"] = "La page ou le service que vous demandez n’existe pas. ";
  }

  if (error["hydra:description"]) {
    if (error.violations) {
      error["_error"] = "";

      error.violations.map((el: any) => {
        error[el.propertyPath] = el.message;
        error["_error"] += `${el.message}<br />`;
        return error;
      });
    } else {
      error["_error"] = error["hydra:description"];
    }
  } else if (error.code && error.code === 401) {
    if (error.message === "Bad credentials") {
      error["_error"] =
        "Vous n’avez pas été reconnu. Merci de réessayer ou de contacter votre administrateur. ";
    }
  }
  return error;
};

const handlePagination = (data: any) => {
  const newData = { ...data };
  const limit = newData.limit ? newData.limit : 10;
  const page = newData.page;

  if (!page && limit) {
    delete newData.limit;
    newData["$limit"] = limit;
  }
  if (limit && page) {
    delete newData.limit;
    delete newData.page;

    newData["$limit"] = limit;
    newData["$skip"] = (page - 1) * limit;
  }

  return newData;
};

interface IBasicAuth {
  username: string;
  password: string;
}

type TApiType = "node" | "wp";

export const fetchFiles = async (
  url: string,
  fileName: string | undefined,
  data = {}
) => {
  const jwtToken = await session.getJwtToken();
  return request
    .get(url)
    .set("Authorization", `Bearer ${jwtToken}`)
    .set("Accept", "application/pdf")
    .query(handlePagination(data))
    .responseType("blob")
    .end((err, resp) => {
      saveAs(resp.body, fileName);
    });
};

const fetch = async (
  url: string,
  _method = "GET",
  data = {},
  files: any = null,
  authorisationHeader: IBasicAuth | null = null,
  apiType: TApiType = "node"
) => {
  const method = _method.toUpperCase();

  const query = request(method, url);
  const jwtToken = await session.getJwtToken();

  switch (method.toUpperCase()) {
    case "GET":
      if (apiType === "node") {
        query.query(handlePagination(data));
      } else {
        query.query(data);
      }
      break;

    case "POST":
    case "PUT":
    case "DELETE":
    case "PATCH":
      if (!files) {
        query.send(data);
      }
      break;

    case "UPLOAD":
      Object.keys(files).forEach((key: string) => {
        const file = files[key];
        query.attach("file", file);
      });
      break;
    default:
  }

  if (authorisationHeader) {
    query.set(
      "Authorization",
      `Basic ${Base64.encode(
        `${authorisationHeader.username}:${authorisationHeader.password}`
      )}`
    );
  } else if (jwtToken) {
    query.set("Authorization", `Bearer ${jwtToken}`);
  }

  if (files) {
    Object.keys(files).forEach((key: string) => {
      const file = files[key];
      query.attach("file", file);
    });
  }

  try {
    const result: any = await query;

    // Handles pagination for wordpress API
    if (apiType === "wp" && method.toUpperCase() === "GET") {
      const responseHeaders = result.headers;

      const total = responseHeaders["x-wp-total"];

      if (total) {
        return {
          total,
          data: result.body,
        };
      }
    }

    return result.body;
  } catch (error: any) {
    if (error.response) {
      throw prepareValidationError(error.response.body);
    } else {
      throw error;
    }
  }
};

export default fetch;
