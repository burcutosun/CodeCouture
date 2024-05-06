import { Route, Switch } from "react-router-dom";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

export default function PageContent() {
  return (
    <>
      <Switch>
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
