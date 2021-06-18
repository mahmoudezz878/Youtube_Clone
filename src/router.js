import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Compnents/Header";

// PAGES
import Search from "./pages/search";
import Video from "./pages/video";
import Recommended from './pages/recommended';
import Trending from "./test/Trending";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Recommended />
        </Route>
        <Route exact path="/video/:videoId">
          <Header />
          <Video />
        </Route>
        <Route exact path="/search/:searchQuery">
          <Search />
        </Route>
        <Route exact path="/trending/:page">
          <Trending />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;