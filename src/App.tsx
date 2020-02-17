import React from "react";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./GlobalStyles";
import normal from "./theme/colors";
import Froggy from "./components/froggy/Froggy";

const App = () => {
  return (
    <ThemeProvider theme={normal}>
      <GlobalStyles />
      <Froggy />
    </ThemeProvider>
  );
};

export default App;
