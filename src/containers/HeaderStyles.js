import navigation from "../images/navigation.png";

export const header = {
  height: 60,
  overflow: "hidden"
};

export const logo = {
  float: "left"
};

export const courseTitleWrap = {
  float: "left",
  width: 630,
  height: 60
};

export const courseTitleSubWrap = {
  display: "table",
  height: "auto",
  width: "100%"
};

export const courseTitle = {
  display: "table-cell",
  verticalAlign: "middle",
  height: 60,
  fontSize: 20,
  color: "#46494b",
  textAlign: "center"
};

export const langBtn = {
  height: 36,
  width: 36,
  display: "block",
  top: 11,
  right: 134,
  overflow: "hidden",
  backgroundImage: `url(${navigation})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-216px 0px",
  position: "absolute",
  ":hover": { backgroundPosition: "-252px 0px" }
};

export const langBtnDisabled = {
  height: 36,
  width: 36,
  display: "block",
  top: 11,
  right: 134,
  overflow: "hidden",
  backgroundImage: `url(${navigation})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-288px 0px",
  position: "absolute",
  cursor: "default"
};

export const helpBtn = {
  height: 36,
  width: 36,
  display: "block",
  top: 11,
  right: 75,
  overflow: "hidden",
  backgroundImage: `url(${navigation})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0px 0px",
  position: "absolute",
  ":hover": { backgroundPosition: "-36px 0px" }
};

export const helpBtnDisabled = {
  height: 36,
  width: 36,
  display: "block",
  top: 11,
  right: 75,
  overflow: "hidden",
  backgroundImage: `url(${navigation})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-72px 0px",
  position: "absolute",
  cursor: "default"
};

export const lessonTitleWrap = {
  clear: "both",
  margin: "18px 30px 0px 35px"
};

export const lessonTitleSubWrap = {
  height: 30,
  paddingLeft: 18,
  paddingRight: 10
};

export const lessonTitle = {
  verticalAlign: "middle",
  height: "100%",
  margin: 0,
  fontSize: 16,
  color: "#666666"
};

export const helpWrap = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 2
};

export const help_bg = {
  width: 945,
  height: 519,
  top: 72,
  position: "absolute",
  left: 35,
  borderRadius: 10
};

export const helpCloseBtn = {
  color: "#FFFFFF",
  cursor: "pointer",
  fontSize: 20,
  padding: "3px 10px",
  position: "absolute",
  left: 34,
  top: 72,
  zIndex: 5,
  backgroundColor: "#2576AE",
  textDecoration: "none",
  borderTopLeftRadius: 10,
  ": hover": { backgroundColor: "#01578F" }
};
