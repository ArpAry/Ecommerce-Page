import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Blogging from "./components/bloggingpage/Blogging";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            {/* Navigation Links */}
            <nav className="app-container">
              <li>
                <Link className="link-name" to="/blog-listing">
                  Blog Listing
                </Link>
              </li>
              <li>
                <Link className="link-name" to="/contact">
                  Contact
                </Link>
              </li>
            </nav>

            {/* Route Definitions */}
            <Routes>
              <Route path="/" element={<Blogging />} />
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
