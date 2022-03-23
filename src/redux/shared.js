import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Height } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};
const Message = ({ success, message }) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      {message && (
        <div>
          {/* You can comment the button out */}
          {/* <Button onClick={handleOpen}>Open modal</Button> */}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon onClick={handleClose} />

              <div className="modalg-head">{success ? "Success" : "Error"}</div>
              <div className={success ? "modalg-head-2" : "modalg-head-err"}>
                {message}
              </div>
              {/* <div className="modalg-head-s"></div> */}
            </Box>
          </Modal>
        </div>
      )}
    </React.Fragment>
  );
};


export const InLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0 + "px",
        top: 0 + "px",
        width: 100 + "%",
        height: 100 + "%",
        zIndex: 9999,
        background:
          'url("//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif")' +
          "50% 50% no-repeat rgb(249, 249, 249)",
      }}
    />
  );
};

export const FlatList = ({
  items,
  RenderItem,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
}) => {
  // console.log(Render)

  // console.log(items, "items");

  if (Array.isArray(items)) {
    const render = items.map((v, i) => {
      return RenderItem({ data: v, key: i });
    });

    // console.log(render, "render");

    if (render.length) {
      return (
        <React.Fragment>
          {ListHeaderComponent ? ListHeaderComponent() : null}
          {render}
          {ListFooterComponent ? ListFooterComponent() : null}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {/* {ListHeaderComponent ? ListHeaderComponent() : null} */}
        {ListEmptyComponent ? ListEmptyComponent() : null}
        {/* {ListFooterComponent ? ListFooterComponent() : null} */}
      </React.Fragment>
    );
  }

  if (ListHeaderComponent || ListEmptyComponent || ListEmptyComponent) {
    return (
      <React.Fragment>
        {ListHeaderComponent ? ListHeaderComponent() : null}

        {ListEmptyComponent ? ListEmptyComponent() : null}
        {ListFooterComponent ? ListFooterComponent() : null}
      </React.Fragment>
    );
  }
  return null;
};

export const NotFound = React.lazy(() =>
  import("./../components/pages/LandingPage/LandingPage")
);

export function ConfirmComp({
  title,
  message,
  handleYes,
  show,
  forceShow,
  func,
}) {
  const [open, setOpen] = React.useState(show || false);
  // const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    // console.log("handleClose");
    if (func) {
      func((s) => ({ ...s, show: false }));
      return;
    }

    setOpen(false);
  };
  React.useEffect(() => {
    let finalShow;
    if (forceShow) {
      finalShow = true;
    } else {
      finalShow = show;
    }

    setOpen(finalShow);
  }, [show, forceShow]);
  // console.log(open, "open", "show", show);

  return (
    <div>
      {/* You can comment the button out */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modald-head">{title ? title : "Warning"}</div>
          <div className="modald-head-2">
            {/* Are you sure you want to delete this grant? All the associated
            applications will also be deleted. You can also export your
            applicants information or archive this grant. */}
            {message ? message : "Are you sure you want to proceed?"}
          </div>
          <div className="modald-create">
            <div
              className="modald-cancel"
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            >
              No
            </div>
            <div
              className="modald-proceed"
              onClick={() => {
                // console.log("handleYes", handleYes);
                handleClose();
                handleYes();
              }}
              style={{ cursor: "pointer" }}
            >
              Yes
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export const Affect = ({ effect, noModal, Loader }) => {
  // console.log(load, effect, cref);
  //   console.log(cref);
  if (effect.load) {
    if (Loader) {
      return <Loader />;
    }
    return <InLoader />;
  }

  let message = "";
  if (noModal !== true) { //true for using modal
    if (Object.keys(effect || {}).length > 0) {
      if (!effect.error) {
        message = effect.message;
        // cref.className = "text-success text-center";
        return <Message success={true} message={message} />;
        //   cref.innerHTML = effect.message;
      } else {
        message = effect.message;
        // cref.className = "text-success text-center";
        return <Message success={false} message={message} />;
      }
    } else {
      return null;
      // cref.style.display = "";
    }
  }

  if (Object.keys(effect || {}).length > 0) {
    if (!effect.error) {
      message = effect.message;
      // cref.className = "text-success text-center";
      return <div className="text-success text-center">{message}</div>;
      //   cref.innerHTML = effect.message;
    } else {
      message = effect.message;
      // cref.className = "text-success text-center";
      return <div className="text-danger text-center">{message}</div>;
    }
  } else {
    return null;
    // cref.style.display = "";
  }
  return null;
};

export const serialize = function (obj) {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
};

export const deSerialize = (search) => {
  return JSON.parse(
    '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );
};

export const matchFunc = (m) => {
  if (m) {
    return deSerialize(m);
  } else {
    return false;
  }
};

export const styleform = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "90%", xs: "90%", md: "60%" },
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 30,
  p: 4,
};

export function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return "";
}

export const convertDate = (date, addition) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  //determine if it's NaN
  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    return null;
  }

  let monthName = "";

  //format month to month name
  monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    newDate
  );

  if (addition) {
    if (addition.type) {
      monthName = new Intl.DateTimeFormat("en-US", {
        month: addition.type,
      }).format(newDate);
    }
    if (addition.year) {
      return `${monthName} ${day}, ${year}`;
    }
  }

  return `${monthName} ${day}`;
};

export const verifyPath = "/verify";

export const toNumber = (value) => {
  if (isNaN(Number(value))) {
    return false;
  }
  return Number(value);
};

export function PrintElem(elem) {
  // console.log(elem, "elem");
  var mywindow = window.open("", "PRINT", "height=400,width=600");
  function getCSS(element) {
    var css_data = "";
    var css_obj = getComputedStyle(element);

    for (var i = 0; i < css_obj.length; i++) {
      css_data +=
        css_obj[i] + ":" + css_obj.getPropertyValue(css_obj[i]) + ";<br>";
    }
    // document.getElementById("resDiv").innerHTML = css_data;
    console.log(css_data, "css_data");
    return css_data;
  }
  elem.setAttribute("style", getCSS(document.getElementById("root")));
  mywindow.document.write("<html><head><title>" + document.title + "</title>");
  mywindow.document.write("</head><body >");
  // mywindow.document.write("<h1>" + document.title + "</h1>");
  mywindow.document.write(elem.innerHTML);
  mywindow.document.write("</body></html>");

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}

export const handleForm = (e) => {
  const elem = e?.target?.elements;
  if (!elem) {
    return;
  }
  const formData = new FormData();
  let alldata = {};
  console.log(elem, "elem", e);
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
  const Tlength = elem?.length || 0;
  for (let i = 0; i < Tlength; i++) {
    // console.log(elem[i].type);
    if (elem[i].type === "file") {
      if (elem[i].files.length > 0) {
        formData.append(elem[i].name, elem[i].files[0]);
      }
    } else if (elem[i].type === "select-multiple") {
      // console.log("elem[i].name", elem[i].name, elem[i], getSelectValues(elem[i]));
      // formData.append(elem[i].name, getSelectValues(elem[i]));
      alldata[elem[i].name] = getSelectValues(elem[i]);
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

  for (var key of formData.entries()) {
    alldata[key[0]] = key[1];
  }

  // for (var key of formData.entries()) {
  //   console.log(key[0], ":", key[1]);
  // }

  console.log(alldata, "      AllData beginssss checkbox    ");

  const checkBoxData = {};
  for (let i = 0; i < Tlength; i++) {
    if (elem[i].type === "checkbox") {
      console.log(elem[i].name, elem[i].checked);
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

  console.log(checkBoxData, "checkBoxData");

  // iterate through checkBoxData and append to formData
  // for (let key in checkBoxData) {
  //   console.log(key, checkBoxData[key], "checkBoxData");
  //   formData.append(key, JSON.stringify(checkBoxData[key]));
  // }

  //delete empty string values from formData
  for (let key of formData.entries()) {
    console.log(key, "key");
    if (key[1] === "") {
      formData.delete(key[0]);
    }
    //remove those with empty keys
    if (key[0] === "") {
      formData.delete(key[0]);
    }
  }

  // console.log(formData.entries(), "formData");
  for (var key of formData.entries()) {
    alldata[key[0]] = key[1];
  }

  // for (var key of formData.entries()) {
  //   console.log(key[0], ":", key[1]);
  // }

  console.log(alldata, "      AllData --       ");
  return alldata;
};

// export const printDocument = async (input) => {
//   try {
//     const htmlData = await html2pdf(input.current);
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };

export const searchData = (searchTerm, searchBy, data) => {
  let result = [];
  if (searchTerm === "") {
    return data;
  }
  if (Array.isArray(searchBy)) {
    for (let i = 0; i < searchBy.length; i++) {
      result = result.concat(
        data.filter((item) =>
          item[searchBy[i]].toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  } else {
    result = data.filter((item) =>
      item[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return result;
};
