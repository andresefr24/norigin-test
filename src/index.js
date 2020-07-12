import React from "react";
import ReactDOM from "react-dom";
import { config } from "dotenv";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

config();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
