import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  const appStyles = {
    position: "relative",
    width: "auto",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    overflow: "auto",
  };

  const backgroundStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#d5d5e4",
    opacity: 0.2,
    backgroundSize: "20px 20px",
    backgroundImage:
      "repeating-linear-gradient(to right, #f77945, #f77945 1px, #d5d5e4 1px, #d5d5e4)",
    zIndex: -1,
  };

  return (
    <div style={appStyles}>
      <div style={backgroundStyles}></div>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
