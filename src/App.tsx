import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass/styled-components";
import { theme } from "./theme";
import Home from "./pages/home";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </Box>
  );
}

export default App;
