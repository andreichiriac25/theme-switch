import "./App.scss";

import ComponentUsingTheme from "./components/ComponentUsingTheme/ComponentUsingTheme";
import ComponentWithoutTheme from "./components/ComponentWithoutTheme/ComponentWithoutTheme";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

const themeConfig = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
  red: {
    backgroundColor: "red",
    color: "black",
  },
  blue: {
    backgroundColor: "blue",
    color: "white",
  },
  green: {
    backgroundColor: "green",
    color: "black",
  },
};

function App() {
  return (
    <>
      <ThemeSwitch theme={themeConfig}>
        <ComponentUsingTheme content="TopBar" />
        <ComponentWithoutTheme content="Content" />
        <ComponentWithoutTheme content="Details" />
        <ComponentUsingTheme content="Contact" />
        <ComponentUsingTheme content="Footer" />
      </ThemeSwitch>
    </>
  );
}

export default App;
