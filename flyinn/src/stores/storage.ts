/* globals window */

// Borrowed from https://raw.githubusercontent.com/pinqy520/mobx-persist/8d68e5b50575feec8a44cd0db7313d08d96d2255/lib/storage.js
export function clear() {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.clear();
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}
export function getItem(key: string) {
  return new Promise((resolve, reject) => {
    try {
      const value = window.localStorage.getItem(key);
      resolve(value);
    } catch (err) {
      reject(err);
    }
  });
}

export function removeItem(key: string) {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.removeItem(key);
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

export function setItem(key: string, value: any) {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(key, value);
      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}
