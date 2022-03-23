import { capitalizeFirstLetter } from "../components/shared";
import { overwriteStore, signIn, storeError, updStore } from "./ActionCreators";
import { store } from "./store";

const baseLink =
  process.env.REACT_APP_BASE_URL || process.env.REACT_APP_USE_URL;
const newtorkErrorAccrossBrowsers = [
  "Failed to fetch",
  "NetworkError when attempting to fetch resource",
];
// console.log("baseLink", baseLink);
const api = (method, path, data) => {
  let token = localStorage.getItem("token");
  // console.log(process.env.NODE_ENV);

  console.log(data, "data", JSON.stringify(data));
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    credentials: "same-origin",
  };
  if (data) {
    options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
      credentials: "same-origin",
    };
  }
  const dofetch = async () => {
    try {
      // console.log(token)
      console.log("baseLink", baseLink, "path", path);

      const r = await fetch(baseLink + path, options);
      // console.log(r.status, "r.status");
      const result = await r.json();

      if (result.success === false) {
        throw new Error(result.message);
      }

      const successStatusCodes = [200, 201, 204];

      if (!successStatusCodes.includes(r.status)) {
        console.warn(result, "not 200s status codes");

        if (result.message) {
          throw new Error(result.message);
        }

        if (result.error) {
          //determine if result.error is String
          if (typeof result.error === "string") {
            throw new Error(result.error);
          }
          if (result.error[Object.keys(result.error)[0]]) {
            throw new Error(result.error[Object.keys(result.error)[0]]);
          } else {
            throw new Error("An error occured");
          }
        }

        // console.log("here")

        throw new Error(r.statusText);
      }

      return result;
    } catch (e) {
      // console.log(e);

      if (
        e.name == "TypeError" &&
        newtorkErrorAccrossBrowsers.includes(e.message)
      ) {
        throw new Error("There is a problem with your internet connection");
      }
      throw new Error(e.message);
    }
  };

  return dofetch();
};

const postfile = (path, data) => {
  const dofetch = async () => {
    try {
      let token = localStorage.getItem("token");
      // console.log(token)
      const r = await fetch(baseLink + path, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          // "Content-Type": "multipart/form-data",
        },
        body: data,
      });
      // console.log(r);
      const result = await r.json();

      if (result.success === false) {
        throw new Error(result.message);
      }

      const successStatusCodes = [200, 201, 204];

      if (!successStatusCodes.includes(r.status)) {
        console.warn(result, "not 200s status codes");

        if (result.message) {
          throw new Error(result.message);
        }

        if (result.error) {
          //determine if result.error is String
          if (typeof result.error === "string") {
            throw new Error(result.error);
          }
          if (result.error[Object.keys(result.error)[0]]) {
            throw new Error(result.error[Object.keys(result.error)[0]]);
          } else {
            throw new Error("An error occured");
          }
        }

        // console.log("here")

        throw new Error(r.statusText);
      }
      return result;
    } catch (e) {
      // console.log(e);

      if (
        e.name == "TypeError" &&
        newtorkErrorAccrossBrowsers.includes(e.message)
      ) {
        throw new Error("There is a problem with your internet connection");
      }
      throw e;
    }
  };

  return dofetch();
};

export const handleFileForm = (e) => {
  let elem = e?.target?.elements;
  if (!elem) {
    elem = e.elements;
  }
  if (!elem) {
    return;
  }
  const formData = new FormData();
  // console.log(elem, "elem", e);

  //return an array of multiple select values
  function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }
  for (let i = 0; i < elem.length; i++) {
    // console.log(elem[i].type);
    if (elem[i].type === "file") {
      formData.append(elem[i].name, elem[i].files[0]);
    } else if (elem[i].type === "select-multiple") {
      // console.log("elem[i].name", elem[i].name, elem[i], getSelectValues(elem[i]));
      formData.append(elem[i].name, getSelectValues(elem[i]));
    } else {
      formData.append(elem[i].name, elem[i].value);
    }
  }

  // console.log(formData.entries(), "formData");
  const alldata = {};
  for (var key of formData.entries()) {
    alldata[key[0]] = key[1];
  }

  // for (var key of formData.entries()) {
  //   console.log(key[0], ":", key[1]);
  // }

  console.log(alldata, "      AllData --       ");
  return formData;
};

export const searchStore = (storeName, value, search) => {
  const state = store.getState().store;
  const theStore = state[storeName];
  let rValue = null;
  // console.log(theStore, "theStore");

  if (Array.isArray(theStore)) {
    theStore.map((v) => {
      if (typeof v === "object") {
        if (v[search] == value) {
          rValue = v;
        }
      } else {
        if (v == value) {
          rValue = v;
        }
      }
    });
  }

  //do for object here

  // if (typeof theStore)

  return rValue;
};

export const searchStoreHooks = (store, value, search) => {
  // const state = store;
  const theStore = store;
  let rValue = null;
  // console.log(theStore, "theStore");

  if (Array.isArray(theStore)) {
    theStore.map((v) => {
      if (typeof v === "object") {
        if (v[search] == value) {
          rValue = v;
        }
      } else {
        if (v == value) {
          rValue = v;
        }
      }
    });
  }

  //do for object here

  // if (typeof theStore)

  return rValue;
};

