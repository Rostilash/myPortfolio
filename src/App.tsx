import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { NotFoundMessage } from "./components/BoolMessages/NotFoundMessage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider>
            <LanguageProvider>
              <Layout />
            </LanguageProvider>
          </ThemeProvider>
        }
      >
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundMessage />} />
    </Routes>
  );
}

export default App;
