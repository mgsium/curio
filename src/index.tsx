import * as React from "react";
import * as ReactDOM from "react-dom";

import * as WebFont from "webfontloader";

import App from "./App";

WebFont.load({
    google: {
        families: ["Quicksand", "Lato", "Lora"]
    }
})

ReactDOM.render(
    <App />,
    document.getElementById("app")
)