import { someFn } from "./test";
import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { App } from "./App";

someFn(123);
render(<App />, document.getElementById("root"));
