import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import BlogSinglePage from "./pages/BlogSinglePage";
import Home from "./pages/Home";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/post/:id" element={<BlogSinglePage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
