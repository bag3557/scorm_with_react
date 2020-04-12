import launch_bg from "./images/launch_bg.png";
import launch_Btn from "./images/launch_Btn.png";

export const loaderStage = {
  height: 490,
  width: 945,
  position: "relative",
  padding: 0,
  margin: 0,
  fontFamily: "MYRIADPRO-REGULAR",
  fontSize: 14,
  color: "#333333",
  overflow: "hidden"
};

export const fullscreen_container = {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "block",
  overflow: " hidden",
  top: 0,
  left: 0
};

export const fullscreen_subContainer = {
  width: 1010,
  height: 670,
  borderRadius: 5,
  backgroundImage: `url(${launch_bg})`,
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  margin: "0 auto"
};

export const launchBtn = {
  width: "105px",
  height: "105px",
  display: "block",
  cursor: "pointer",
  backgroundImage: `url(${launch_Btn})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0px 0px",
  margin: "357px auto 0px auto",
  ":hover": {
    backgroundImage: `url(${launch_Btn})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-105px 0px"
  }
};

export const loader = {
  position: "absolute",
  textAlign: "center",
  zIndex: 9999,
  width: "100%",
  height: "100%",
  background: "#fff",
  display: "block",
  overflow: "hidden",
  top: 0,
  left: 0
};

export const loaderImg = {
  position: "fixed",
  top: "50%",
  left: "50%",
  marginTop: "-50px",
  marginLeft: "-50px"
};
