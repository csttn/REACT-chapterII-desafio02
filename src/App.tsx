import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
