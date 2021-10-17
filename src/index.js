const Index= () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Happy Birthday!")
  );
};

ReactDOM.render(React.createElement(Index), document.getElementById("root"));
