import { Switch, Route, useRouteMatch, Redirect } from "react-router";
import AboutPage from "./about/index";
import DetailTentangKami from "./about/detail";
import EditTentangKami from "./about/edit";
import AddSkill from "./about/add_skill";
import EditSkill from "./about/edit_skill";
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
        <Route exact path={`${match.path}`} component={AboutPage} />
        <Route path={`${match.path}/detail_tentangkami`} component={DetailTentangKami} />
        <Route path={`${match.path}/edit_tentangkami`} component={EditTentangKami} />
        <Route path={`${match.path}/add_skill`} component={AddSkill} />
        <Route path={`${match.path}/edit_skill`} component={EditSkill} />
        {/* Project */}
        <Route path={`${match.path}/projek`} component={ProjekPage} />
        <Route path={`${match.path}/add_projek`} component={AddProjekPage} />
        <Route path={`${match.path}/detail_projek`} component={DetailProjekPage} />
        <Route path={`${match.path}/edit_projek`} component={EditProjekPage} />
        {/* Anggota */}
        <Route path={`${match.path}/anggota`} component={AnggotaPage} />
        <Route path={`${match.path}/add_anggota`} component={AddAnggotaPage} />
        <Route path={`${match.path}/edit_anggota`} component={EditAnggotaPage} />
        {/* Testimoni */}
        <Route path={`${match.path}/testimoni`} component={TestimoniPage} />
        <Route path={`${match.path}/add_testimoni`} component={AddTestimoniPage} />
        <Route path={`${match.path}/edit_testimoni`} component={EditTestimoniPage} />
        <Route path={`${match.path}/detail_testimoni`} component={DetailTestimoniPage} />
        {/* Permintaan */}
        <Route path={`${match.path}/permintaan`} component={PermintaanPage} />
        <Route path={`${match.path}/detail_permintaan`} component={DetailPermintaanPage} />
        <Redirect to="/login" />
      </Switch>
    </Layout>
  );
};

export default AdminLayout;
