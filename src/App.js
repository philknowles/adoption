const Pet = (props) => {
  return React.createElement(
  "div",
  {},
  [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Kage",
        animal: "Dog",
        breed: "Pit Boxer"
      }),
      React.createElement(Pet, {
        name: "Snickers",
        animal: "Cat",
        breed: "Tabby"
      }),
      React.createElement(Pet, {
        name: "Kitcat",
        animal: "Cat",
        breed: "Gray Haired"
      }),
    ]
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

