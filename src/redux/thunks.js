// import { capitalizeFirstLetter } from "../components/shared";
import { overwriteStore, signIn, storeError, updStore } from "./ActionCreators";
import { store } from "./store";
const baseLink = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : "https://clappe-backend.herokuapp.com/";
// const baseLink = process.env.REACT_APP_BASE_URL || "http://localhost:3005/";
const newtorkErrorAccrossBrowsers = [
  "Failed to fetch",
  "NetworkError when attempting to fetch resource",
];
const api = (method, path, data) => {
  let token = localStorage.getItem("token");
  // console.log(process.env.NODE_ENV);

  // console.log(data);
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
      const r = await fetch(baseLink + path, options);
      // console.log(r.status);
      const result = await r.json();
      // console.log(result);

      // if (r.status === 422) {
      //   console.warn(result, 422);
      //   let err = new Error(
      //     "There's an error in one of the field: " +
      //       " \n  " +
      //       result.error[Object.keys(result.error)[0]]
      //   );
      //   throw err;
      // }

      if (result.success === false) {
        throw new Error(result.message);
      }

      if (r.status !== 200) {
        console.warn(result, "not 200");

        if (result.message) {
          throw new Error(result.message);
        }

        if (result.error) {
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

export const searchStore = (storeName, value, search) => {
  const state = store.getState().store;
  const theStore = state[storeName];
  // console.log(theStore, "theStored");
  let rValue = null;

  if (Array.isArray(theStore)) {
    theStore.map((v) => {
      if (typeof v === "object") {
        if (v[search] === value) {
          rValue = v;
        }
      } else {
        if (v === value) {
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
      console.log(e);
      throw e;
    }
  };

  return dofetch();
};

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

export const handleFileForm = (e) => {
  const formData = new FormData();
  const elem = e?.elements;
  if (!elem) {
    return;
  }
  let alldata = {};
  // console.log(elem, "elem", e);
  function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    //ERROR HERE iLEn
    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }
  //return an array of multiple select values

  for (let i = 0; i < elem.length; i++) {
    // console.log(elem[i].type);
    if (elem[i].type === "file") {
      if (elem[i].files.length > 0) {
        formData.append(elem[i].name, elem[i].files[0]);
      }
    } else if (elem[i].type === "select-multiple") {
      // console.log("elem[i].name", elem[i].name, elem[i], getSelectValues(elem[i]));
      formData.append(elem[i].name, JSON.stringify(getSelectValues(elem[i])));
    } else if (elem[i].type === "radio") {
      if (elem[i].checked) {
        formData.append(elem[i].name, elem[i].value);
      }
    } else if (elem[i].type !== "checkbox") {
      if (elem[i].value) {
        formData.append(elem[i].name, elem[i].value);
      }
    }
  }

  alldata = {};
  for (var key of formData.entries()) {
    alldata[key[0]] = key[1];
  }

  // for (var key of formData.entries()) {
  //   console.log(key[0], ":", key[1]);
  // }

  // console.log(alldata, "      AllData beginssss checkbox    ");

  const checkBoxData = {};
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].type === "checkbox") {
      // console.log(elem[i].name, elem[i].checked);
      // formData.append(elem[i].name, elem[i].value);
      if (elem[i].checked) {
        if (checkBoxData[elem[i].name]) {
          checkBoxData[elem[i].name].push(elem[i].value);
        } else {
          checkBoxData[elem[i].name] = [elem[i].value];
        }
      }
    }
  }

  // console.log(checkBoxData, "checkBoxData");

  // iterate through checkBoxData and append to formData
  for (let key in checkBoxData) {
    // console.log(key, checkBoxData[key], "checkBoxData");
    formData.append(key, JSON.stringify(checkBoxData[key]));
  }

  //delete empty string values from formData
  for (let key of formData.entries()) {
    // console.log(key, "key");
    if (key[1] === "") {
      formData.delete(key[0]);
    }
    //remove those with empty keys
    if (key[0] === "") {
      formData.delete(key[0]);
    }
  }

  // console.log(formData.entries(), "formData");
  alldata = {};
  for (var key of formData.entries()) {
    alldata[key[0]] = key[1];
  }

  // for (var key of formData.entries()) {
  //   console.log(key[0], ":", key[1]);
  // }

  // console.log(alldata, "      AllData --       ");
  return formData;
};

export const handleForm = (e) => {
  const elem = e?.target?.elements;
  // console.log(elem, "elem", e);
  if (!elem) {
    return;
  }
  const formObj = {};

  for (let i = 0; i < elem.length; i++) {
    if (elem[i].type === "select-multiple") {
      formObj[elem[i].name] = getSelectValues(elem[i]);
    } else {
      formObj[elem[i].name] = elem[i].value;
    }
  }
  return formObj;
};
export const getWorkshops = async () => {
  try {
    const res = await api("GET", "workshops");
    console.log(res, "res workshops");
    store.dispatch(
      overwriteStore({
        name: "workshops",
        value: res.data,
      })
    );
    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
//APPLICATIONS
export const fetchAllApplications = async () => {
  try {
    const res = await api("GET", "applications");
    // console.log(res)
    store.dispatch(
      overwriteStore({
        name: "applications",
        value: res.data,
      })
    );
    console.log(res.data, "res.data.data for applications");
  } catch (error) {
    console.warn("An error occured", error);

    await fetchAllApplications();
    // throw new Error(error.message);
  }
};

//GRANTS
export const fetchAllGrants = async () => {
  try {
    const r = await api("GET", "grants");
    // console.log(r, "grants");

    await fetchAllApplications();
    let tempgrants = [];
    (r.data.grants || []).map((v) => {
      let mainImgUrl;
      let bannerImgUrl;
      let clonedObject = JSON.parse(JSON.stringify(v));
      if (Array.isArray(v.images)) {
        v.images.forEach((a) => {
          if (a.name === "main") {
            mainImgUrl = a.url;
          } else if (a.name === "banner") {
            bannerImgUrl = a.url;
          }
        });
      }
      if (mainImgUrl) {
        clonedObject.mainImgUrl = mainImgUrl;
      }

      if (bannerImgUrl) {
        clonedObject.bannerImgUrl = bannerImgUrl;
      } else {
        clonedObject.bannerImgUrl = mainImgUrl;
      }

      //add more stuff here

      clonedObject.overlay =
        "linear-gradient(0deg, rgba(0, 174, 217, 0.9), rgba(0, 174, 217, 0.9))";
      clonedObject.fs = "70px";
      clonedObject.cardGoal = 10;

      tempgrants.push(clonedObject);
    });
    store.dispatch(
      overwriteStore({
        name: "grants",
        value: tempgrants,
      })
    );
    return r;
  } catch (e) {
    await fetchAllGrants();
    console.log(e.message);
  }
};

const requiredDatas = async (data, required) => {
  try {
    await fetchAllGrants();
    await getWorkshops();
  } catch (e) {
    console.log(e);
  }
};

export const fetchToken = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(baseLink + "login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      credentials: "same-origin",
    });
    const res_1 = await res.json();
    if (res_1.success) {
      console.log("succesful", res_1);
      store.dispatch(signIn({ success: true, user: res_1.data.user }));
      await requiredDatas();
      return res_1;
    } else {
      console.log("err", res_1);
      throw res_1;
    }
  } catch (err) {
    console.log("error", err);
    return false;
  }
};

export const updateProfile = async (form) => {
  try {
    const res = await api("PUT", "profile", form);
    store.dispatch(signIn({ success: true, user: res.data }));
    // getEvents()
  } catch (error) {
    throw new Error(error.message);
  }
};

export const tryLogin = async (username, pword) => {
  try {
    const res = await api("POST", "users/login", {
      email: username,
      password: pword,
    });
    // console.log("here", res, "here")

    localStorage.setItem("token", res.data.token);
    // await getEvents();
    // await fetchCenters()

    store.dispatch(signIn({ success: true, user: res.data.user }));
    await requiredDatas();
    return res;
  } catch (error) {
    // console.log("here", error, "here")

    throw new Error(error.message);
  }
};

export const genPreQuestions = (formData) => {
  //get all organigram type questions
  let organigramQuestions = [];
  for (let i = 1; i < Object.keys(formData).length + 1; i++) {
    if (formData[String(i)]) {
      if (formData[String(i)].type === "organigram") {
        organigramQuestions.push(formData[String(i)]);
      }
    }
  }

  // console.log(organigramQuestions, "organigramQuestions");

  //get all other question types excluding organigram
  let otherQuestions = [];
  for (let i = 1; i < Object.keys(formData).length + 1; i++) {
    if (formData[String(i)]) {
      if (formData[String(i)].type !== "organigram") {
        otherQuestions.push(formData[String(i)]);
      }
    }
  }

  return { organigramQuestions, otherQuestions };
};

export const genEliQuestions = (formData) => {
  console.log(formData, "formData in genEli");
  //get all organigram type questions
  const organigramQuestions = [];
  const otherQuestions = [];
  const allQuestions = formData;
  const sectionNames = [];
  const mainQuestions = {};
  // const temp = "Section ";
  let section = 1;
  let questNo = 0;
  let orderedNo = 0;
  const orderedQuestions = {};
  for (let [key, value] of Object.entries(allQuestions)) {
    // for (let i = 1; i < Object.keys(formData).length + 1; i++) {
    // console.log("beggining", questNo);
    const data = value;
    const newVal = [];
    if (Array.isArray(data)) {
      data.forEach((item, i) => {
        const clonedItem = JSON.parse(JSON.stringify(item));
        clonedItem.number = i + 1;
        orderedNo += 1;
        clonedItem.orderedNo = orderedNo;
        if (clonedItem.type === "organigram") {
          organigramQuestions.push(clonedItem);
        }
        if (clonedItem.type !== "organigram") {
          questNo += 1;
          clonedItem.questNo = questNo;
        }

        //clone item object and assign index property to it
        newVal.push(clonedItem);

        orderedQuestions[String(orderedNo)] = clonedItem;

        // else {
        //   otherQuestions.push(clonedItem);
        // }
      });
    } else {
      console.warn("data is not an array", data);
    }
    // console.log("end", questNo);

    mainQuestions[String(section)] = newVal;
    sectionNames[section] = key;
    section += 1;
  }

  // console.log(
  //   allQuestions,
  //   "allQuestions",
  //   organigramQuestions,
  //   "organigramQuestions"
  // );

  // console.log(mainQuestions, "mainQuestions");
  return {
    organigramQuestions,
    allQuestions,
    mainQuestions,
    sectionNames,
    orderedQuestions,
  };
};

export const getSectionValue = (data, formData) => {
  let value;
  const section = formData[data.sectionName];
  if (Array.isArray(section)) {
    section.forEach((item) => {
      if (item.orderedNo === data.orderedNo) {
        value = item.value;
      }
    });
  } else {
    console.warn("section is not an array", section);
  }
  return value;
};

//APPLICATIONS
export const submitPreEligibilityApplication = async (formData, id) => {
  try {
    const res = await postfile("applications/preEligibility/" + id, formData);
    // fetchAllApplications();
    // console.log(res, "res");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const savePreEligibilityApplication = async (formData, id) => {
  try {
    const res = await postfile(
      "applications/save/preEligibility/" + id,
      formData
    );
    console.log(res, "res");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const submitEliApplication = async (formData, id) => {
  try {
    const res = await postfile("applications/eligibility/" + id, formData);
    // fetchAllApplications();
    console.log(res, "res");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveEligibilityApplication = async (formData, id) => {
  try {
    const res = await postfile("applications/save/eligibility/" + id, formData);
    console.log(res, "res");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const submitApplicationForm = async (formData, id) => {
  try {
    const res = await postfile("applications/applicationForm/" + id, formData);
    // console.log(res, "res");
    // fetchAllApplications();
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveApplicationForm = async (formData, id) => {
  try {
    const res = await postfile(
      "applications/save/applicationForm/" + id,
      formData
    );
    console.log(res, "res");
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
