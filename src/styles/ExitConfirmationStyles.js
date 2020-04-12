import navigation from "../images/navigation.png";

export const exitWrap = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: "100%",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 9999
};

export const exit = {
  border: "3px solid #2576AE",
  minHeight: 160,
  margin: "250px auto",
  width: "35%",
  backgroundColor: "#ffffff",
  minWidth: 245
};

export const exitInfo = {
  height: "91%",
  width: "100%"
};

export const exitInfoDesc = {
  minHeight: 40,
  fontSize: 16
};

export const exitInfoOptions = {
  margin: 10,
  overflow: "hidden",
  overflowY: "auto",
  textAlign: "center"
};

export const exitInfoLastOption = {
  marginTop: 10
};

// .exitInfo div:last-child div {
//     display: inline-block;
// }

// .exitInfo div:last-child div a:last-child {
//     margin-left: 10px;
// }

export const exitHeader = {
  minHeight: 31,
  width: "100%",
  backgroundColor: "#2576AE",
  display: "inline-block",
  position: "relative",
  color: "#ffffff"
};

// .exitHeader>div {
//     font-size: 16px;
//     float: left;
//     margin: 3px 10px 3px 10px;
// }

export const agreeToClose = {
  cursor: "pointer",
  ":hover": {
    cursor: "pointer",
    backgroundColor: " #2576AE"
  }
};

export const disagreeToClose = agreeToClose;

export const exitBtn = {
  height: 36,
  width: 36,
  display: "block",
  top: 11,
  right: 17,
  overflow: "hidden",
  backgroundImage: `url(${navigation})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-108px 0px",
  position: "absolute",
  ":hover": { backgroundPosition: "-144px 0px" }
};

export const exitBtnDisabled = {
  height: 36,
  width: 36,
  display: "block",
  top: 11,
  right: 17,
  overflow: "hidden",
  backgroundImage: `url(${navigation})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-180px 0px",
  position: "absolute",
  cursor: "default"
};
