import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider, useColorMode } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core"
import './App.css';
import { customTheme } from "./theme/theme"


export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Button onClick={toggleColorMode}>
          Button {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
