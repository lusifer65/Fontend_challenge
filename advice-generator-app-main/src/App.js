import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";
import "./Style.scss";
const App = () => {
  return (
    <React.Fragment>
      <Card />
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(<App />);
