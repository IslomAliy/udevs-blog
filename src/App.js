import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogSinglePage from "./pages/BlogSinglePage";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/post/:id" element={<BlogSinglePage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
