import { onSnapshot, applySnapshot, IStateTreeNode } from "mobx-state-tree";
import * as storage from "./storage";

export interface IArgs {
  (
    name: string,
    store: IStateTreeNode,
    initialState: any,
    options?: IOptions
  ): Promise<void>;
}
export interface IOptions {
  jsonify?: boolean;
  readonly whitelist?: Array<string>;
  readonly blacklist?: Array<string>;
}
type StrToAnyMap = { [key: string]: any };

export const persist: IArgs = (name, store, initialState, options = {}) => {
  let { jsonify = true, whitelist, blacklist } = options;

  const whitelistDict = arrToDict(whitelist);
  const blacklistDict = arrToDict(blacklist);

  onSnapshot(store, (_snapshot: StrToAnyMap) => {
    // need to shallow clone as otherwise properties are non-configurable (https://github.com/agilgur5/mst-persist/pull/21#discussion_r348105595)
    const snapshot = { ..._snapshot };
    Object.keys(snapshot).forEach((key) => {
      if (whitelist && !whitelistDict[key]) {
        delete snapshot[key];
      }
      if (blacklist && blacklistDict[key]) {
        delete snapshot[key];
      }
    });

    const data = !jsonify ? snapshot : JSON.stringify(snapshot);

    storage.setItem(name, data);
  });

  return storage.getItem(name).then((data: any) => {
    let snapshot = !isString(data) ? data : JSON.parse(data);

    let cleanSnapshot = snapshot;

    if (snapshot && snapshot.accounts && snapshot.accounts.selectedAccount) {
      const selectedAccountId = snapshot.accounts.selectedAccount;
      const list = snapshot.accounts.list;

      const selectedAccount = list
        ? list.find((item: { id: any }) => item.id === selectedAccountId)
        : undefined;

      if (!selectedAccount) {
        cleanSnapshot = {
          ...cleanSnapshot,
          accounts: {
            ...cleanSnapshot.accounts,
            selectedAccount: null,
          },
        };
      }
    }

    // don't apply falsey (which will error), leave store in initial state
    if (!cleanSnapshot) {
      return;
    }

    snapshot = {
      ...initialState,
      ...cleanSnapshot,
    };

    try {
      applySnapshot(store, snapshot);
    } catch (error) {
      console.log({ error });
    }
  });
};

type StrToBoolMap = { [key: string]: boolean };

function arrToDict(arr?: Array<string>): StrToBoolMap {
  if (!arr) {
    return {};
  }
  return arr.reduce((dict: StrToBoolMap, elem) => {
    dict[elem] = true;
    return dict;
  }, {});
}

function isString(value: any): value is string {
  return typeof value === "string";
}

export default persist;
