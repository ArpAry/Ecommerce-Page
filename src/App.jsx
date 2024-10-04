import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Blogging from "./components/bloggingpage/Blogging";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <div>
            {/* Navigation Links */}
            <nav className="app-container">
              <li>
                <Link to="/blog-listing">Blog Listing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </nav>

            {/* Route Definitions */}
            <Routes>
              <Route path="/blog-listing" element={<Blogging />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
