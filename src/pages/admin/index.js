import { Switch, Route, useRouteMatch, Redirect } from "react-router";
import AboutPage from "./tentang-kami/index";
import DetailTentangKami from "./tentang-kami/detail";
import EditTentangKami from "./tentang-kami/edit";
import ProjekPage from "./project/index";
import AddProjekPage from "./project/add";
import DetailProjekPage from "./project/detail";
import EditProjekPage from "./project/edit";
import AnggotaPage from "./anggota/index";
import AddAnggotaPage from "./anggota/add";
import EditAnggotaPage from "./anggota/edit";
import TestimoniPage from "./testimoni/index";
import AddTestimoniPage from "./testimoni/add";
import EditTestimoniPage from "./testimoni/edit";
import DetailTestimoniPage from "./testimoni/detail";
import PermintaanPage from "./permintaan/index";
import DetailPermintaanPage from "./permintaan/detail";
import Layout from "../../components/Admin/Layout";

const AdminLayout = () => {
  const match = useRouteMatch();

  return (
    <Layout>
      <Switch>
        {/* About */}
        <Route exact path={`${match.path}/tentang-kami`} component={AboutPage} />
        <Route path={`${match.path}/tentang-kami/detail`} component={DetailTentangKami} />
        <Route path={`${match.path}/tentang-kami/edit`} component={EditTentangKami} />
        {/* Project */}
        <Route exact path={`${match.path}/projek`} component={ProjekPage} />
        <Route path={`${match.path}/projek/add`} component={AddProjekPage} />
        <Route path={`${match.path}/projek/detail`} component={DetailProjekPage} />
        <Route path={`${match.path}/projek/edit`} component={EditProjekPage} />
        {/* Anggota */}
        <Route exact path={`${match.path}/anggota`} component={AnggotaPage} />
        <Route path={`${match.path}/anggota/add`} component={AddAnggotaPage} />
        <Route path={`${match.path}/anggota/edit`} component={EditAnggotaPage} />
        {/* Testimoni */}
        <Route exact path={`${match.path}/testimoni`} component={TestimoniPage} />
        <Route path={`${match.path}/testimoni/add`} component={AddTestimoniPage} />
        <Route path={`${match.path}/testimoni/edit`} component={EditTestimoniPage} />
        <Route path={`${match.path}/testimoni/detail`} component={DetailTestimoniPage} />
        {/* Permintaan */}
        <Route exact path={`${match.path}/permintaan`} component={PermintaanPage} />
        <Route path={`${match.path}/permintaan/detail`} component={DetailPermintaanPage} />
        <Redirect to="/admin/tentang-kami" />
      </Switch>
    </Layout>
  );
};

export default AdminLayout;
