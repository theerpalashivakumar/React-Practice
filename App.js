const parent = React.createElement(
  "div",
  { id: "parant" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "hello react from react")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
