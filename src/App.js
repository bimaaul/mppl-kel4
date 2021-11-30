import "./App.css";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import Admin from "./pages/admin/index";

const App = () => {
  const [user] = useContext(UserContext);

  const AdminRoute = ({ user, ...props }) => {
    if (user && user.isSuperAdmin) return <Route {...props} />;
    else return <Redirect to="/login" />;
  };

  const LoginRoute = ({ user, ...props }) => {
    if (user && user.isSuperAdmin) return <Redirect to="/admin" />;
    else return <Route {...props} />;
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <LoginRoute exact path="/login" user={user} component={Login} />
      <AdminRoute path="/admin" user={user} component={Admin} />
    </Switch>
  );
};

export default App;
