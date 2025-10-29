import App from "./App";
import ReactDom from "react-dom/client";

let rootEle=document.getElementById('root');
let root =ReactDom.createRoot(rootEle);
root.render(<App/>);