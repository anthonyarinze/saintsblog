import { DarkModeProvider } from "./components/DarkModeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";
import Articles from "./components/Article";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="articles" />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:articleId" element={<ArticleDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
