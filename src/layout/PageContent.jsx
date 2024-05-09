import { Route, Switch } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function PageContent() {
  return (
    <>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/productdetail/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
