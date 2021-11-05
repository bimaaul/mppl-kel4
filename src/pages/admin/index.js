import { Switch, Route, useRouteMatch } from "react-router";
import ResponsiveDrawer from "../../components/Admin/ResponsiveDrawer";

const AdminLayout = () => {
  const match = useRouteMatch();

  return (
    <ResponsiveDrawer>
      <Switch>
        <Route path={`${match.path}/projek`}>Projek</Route>
        <Route path={`${match.path}/anggota`}>Anggota</Route>
        <Route path={`${match.path}/testimoni`}>Testimoni</Route>
        <Route path={`${match.path}/permintaan`}>Permintaan</Route>
      </Switch>
    </ResponsiveDrawer>
  );
};

export default AdminLayout;
