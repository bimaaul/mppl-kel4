import { Switch, Route, useRouteMatch } from "react-router";
import AnggotaPage from "./subpage/anggota";
import PermintaanPage from "./subpage/permintaan";
import DetailPermintaanPage from "./subpage/detail_permintaan";
import ProjekPage from "./subpage/projek";
import AddProjekPage from "./subpage/add_projek";
import DetailProjekPage from "./subpage/detail_projek";
import EditProjekPage from "./subpage/edit_projek";
import TestimoniPage from "./subpage/testimoni";
import AddTestimoniPage from "./subpage/add_testimoni";
import AddAnggotaPage from "./subpage/add_anggota";
import AddAnggotaPage1 from "./subpage/add_anggota1";
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
        <Route path={`${match.path}/add_projek`} component={AddProjekPage} />
        <Route path={`${match.path}/detail_projek`} component={DetailProjekPage} />
        <Route path={`${match.path}/edit_projek`} component={EditProjekPage} />
        <Route path={`${match.path}/anggota`} component={AnggotaPage} />
        <Route path={`${match.path}/testimoni`} component={TestimoniPage} />
        <Route path={`${match.path}/add_testimoni`} component={AddTestimoniPage} />
        <Route path={`${match.path}/add_anggota`} component={AddAnggotaPage1} />
        <Route path={`${match.path}/edit_testimoni`} component={EditTestimoniPage} />
        <Route path={`${match.path}/detail_testimoni`} component={DetailTestimoniPage} />
        <Route path={`${match.path}/permintaan`} component={PermintaanPage} />
        <Route path={`${match.path}/detail_permintaan`} component={DetailPermintaanPage} />
      </Switch>
    </Layout>
  );
};

export default AdminLayout;
