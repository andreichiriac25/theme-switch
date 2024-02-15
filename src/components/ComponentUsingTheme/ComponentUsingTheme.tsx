import { useContext } from "react";

import ThemeSwitchContext from "../../contexts/ThemeSwitchContext";

const ComponentUsingTheme = ({ content }: { content: string }) => {
  const { theme }: { theme: object[] } = useContext(ThemeSwitchContext);

  return <div style={theme?.[1]}>{content}</div>;
};

export default ComponentUsingTheme;
