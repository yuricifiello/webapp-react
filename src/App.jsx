import { LoaderProvider, useLoader } from "./context/LoaderContext";
import Loader from "./components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function LoaderWrapper() {
  const { isLoading } = useLoader();
  return isLoading ? <Loader /> : null;
}

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <LoaderWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
