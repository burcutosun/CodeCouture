import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";

export default function PageContent() {
  return (
    <>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/productdetail/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}
