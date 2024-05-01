import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ShopPage from "../pages/ShopPage";
import HomePage from "../pages/HomePage";

export default function PageContent() {
  return (
    <>
      <Switch>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}
