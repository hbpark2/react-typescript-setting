import { Route, Switch } from "react-router";
import Home from "../Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
