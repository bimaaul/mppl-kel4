import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import Admin from "./pages/admin/index";

function App() {
  const AdminRoute = ({ user, ...props }) => {
    if (user && user.isAdmin) return <Route {...props} />;
    else return <Redirect to="/login" />;
  };

  const LoginRoute = ({ user, ...props }) => {
    if (user && user.isAdmin) return <Redirect to="/admin" />;
    else return <Route {...props} />;
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      {/* <LoginRoute path="/login" user={null} component={Login} /> */}
      {/* <AdminRoute path="/admin" user={null} component={Admin} /> */}
    </Switch>
  );
}

export default App;
