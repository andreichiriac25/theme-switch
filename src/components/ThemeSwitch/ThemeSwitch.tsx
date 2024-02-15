import classNames from "classnames";
import { ReactNode, useState } from "react";

import ThemeSwitchContext from "../../contexts/ThemeSwitchContext";
import * as styles from "./ThemeSwitch.scss";

const cx = classNames.bind(styles);

const ThemeSwitch = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: { [name: string]: object };
}) => {
  const [currentTheme, setCurrentTheme] = useState<[string, object]>(["", {}]);
  const [open, setOpen] = useState<boolean>(false);

  const handleSwitchTheme = (name: string) => {
    setCurrentTheme([name, theme[name]]);
  };

  return (
    <ThemeSwitchContext.Provider value={{ theme: currentTheme }}>
      <div className="theme-switch">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="theme-switch__open-theme"
        >
          {open ? "-" : "+"} Themes
        </button>
        <div
          className={cx("theme-switch__themes", {
            "theme-hidden": !open,
          })}
        >
          {Object.keys(theme).map((name: string) => (
            <button
              onClick={() => handleSwitchTheme(name)}
              key={`theme-${name}`}
              className={cx({ "theme-active": name === currentTheme[0] })}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="children">{children}</div>
    </ThemeSwitchContext.Provider>
  );
};

export default ThemeSwitch;
