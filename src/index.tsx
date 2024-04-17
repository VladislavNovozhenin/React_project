import React from "react";
import ReactDOM from "react-dom/client";
import "./main.global.module.css";
import { AppWrap } from "./App";
import "./shared/fonts/b/sf-ui-display-b.woff";
import "./shared/fonts/sf-ui-display-m.woff";
import "./shared/fonts/sf-ui-display-r.woff";
import "./shared/fonts/sf-ui-display-t.woff";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppWrap />);
