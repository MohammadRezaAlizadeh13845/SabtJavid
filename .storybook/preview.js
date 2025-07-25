import "../src/styles/index.css";
import { MemoryRouter } from "react-router-dom";
import { ThemeContext } from "../src/context/ThemeContext";
import { useState } from "react";

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const [mode, setMode] = useState("light");
      return (
        <MemoryRouter initialEntries={["/"]}>
          <ThemeContext.Provider value={{ mode, setMode }}>
            <Story />
          </ThemeContext.Provider>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
