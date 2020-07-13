import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "~/store";
import GlobalStyle from "~/styles/global";
import CustomRouter from "~/routes/Router";
import { theme } from "~/styles/theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
