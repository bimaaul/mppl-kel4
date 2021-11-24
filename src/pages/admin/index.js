import { Switch, Route, useRouteMatch } from "react-router";
import AnggotaPage from "./subpage/anggota";
import PermintaanPage from "./subpage/permintaan";
import ProjekPage from "./subpage/projek";
import TestimoniPage from "./subpage/testimoni";
import AddTestimoniPage from "./subpage/add_testimoni";
import EditTestimoniPage from "./subpage/edit_testimoni";
import DetailTestimoniPage from "./subpage/detail_testimoni";
import AboutPage from "./subpage/about";
import Layout from "../../components/Admin/Layout";

const AdminLayout = () => {
  const match = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.path}`} component={AboutPage} />
        <Route path={`${match.path}/projek`} component={ProjekPage} />
        <Route path={`${match.path}/anggota`} component={AnggotaPage} />
        <Route path={`${match.path}/testimoni`} component={TestimoniPage} />
        <Route path={`${match.path}/add_testimoni`} component={AddTestimoniPage} />
        <Route path={`${match.path}/edit_testimoni`} component={EditTestimoniPage} />
        <Route path={`${match.path}/detail_testimoni`} component={DetailTestimoniPage} />
        <Route path={`${match.path}/permintaan`} component={PermintaanPage} />
      </Switch>
    </Layout>
  );
};

export default AdminLayout;
