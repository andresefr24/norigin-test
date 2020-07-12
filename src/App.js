import React from "react";
import { Provider } from "react-redux";
import { store } from "~/store";
import GlobalStyle from "~/styles/global";
import CustomRouter from "~/routes/Router";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CustomRouter />
    </Provider>
  );
};

export default App;
