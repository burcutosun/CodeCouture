import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";
import SignUpSuccess from "../components/SignUpSuccess";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { checkAuth } from "../store/actions/thunkActions";

export default function PageContent() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.client.isAuthenticated);

  useEffect(() => {
    const verifyToken = async () => {
      await dispatch(checkAuth());
    };
    verifyToken();
  }, [dispatch]);

  return (
    <Switch>
      {!isAuthenticated ? (
        <>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signup_success">
            <SignUpSuccess />
          </Route>
          <Redirect to="/login" />
        </>
      ) : (
        <>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
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
          <Redirect to="/" />
        </>
      )}
    </Switch>
  );
}
