import { ThemeProvider } from "styled-components";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme, GlobalStyle } from "../Styles";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { StoreProvider } from "../Context/ContextStore";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
