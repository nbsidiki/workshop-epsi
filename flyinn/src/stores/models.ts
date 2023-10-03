import { defaultErrorToast } from "./../utils/toast";
import { types, Instance } from "mobx-state-tree";
import { toast } from "react-toastify";

export const ServiceProgressModel = types.model({
  value: types.enumeration(["initial", "pending", "done", "error"]),
  error: types.maybeNull(types.string),
  code: types.maybeNull(types.number),
});

export const initialServiceProgress = {
  value: "initial",
  error: null,
  code: null,
};

export const ServiceStateModel = types.optional(
  types
    .model({
      state: types.enumeration(["initial", "pending", "done", "error"]),
      error: types.maybeNull(types.string),
      total: types.number,
      limit: types.number,
    })
    .views((self) => ({
      get isPending() {
        return self.state === "pending";
      },

      get hasFailed() {
        return self.state === "error";
      },

      get isDone() {
        return self.state === "done";
      },
    }))
    .actions((self) => {
      return {
        pending() {
          self.state = "pending";
        },

        fail(message?: string) {
          self.state = "error";

          if (message) {
            toast.error(message);
          } else {
            defaultErrorToast();
          }
        },

        done(message?: string) {
          self.state = "done";

          if (message) {
            toast.success(message);
          }
        },

        setPagination(total: number, limit: number) {
          self.total = total;
          self.limit = limit;
        },
      };
    }),
  { state: "initial", error: null, total: 0, limit: 0 }
);

export interface IServiceProgress
  extends Instance<typeof ServiceProgressModel> {}
