import Layout from "./ui/Layout";
import { DarkModeProvider } from "./components/DarkModeContext";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Layout />
    </DarkModeProvider>
  );
}

export default App;
