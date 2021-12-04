import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../context/UserContext";
import { List, ListItem, Drawer, Box, Button } from "@material-ui/core";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import LogoAdmin from "../../assets/mamen_admin.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "#0D0C0F",
  },
  menu: {
    paddingTop: "25px",
    height: "100%",
    background: "#0D0C0F",
    color: "white",
    fontFamily: "Poppins",
  },
  marginBottom: {
    margin: "0 23px 10% 23px",
    color: "#fff",
    textTransform: "initial",
    alignItems: "left",
    justifyContent: "left",
    padding: "12px 0 12px 25px",
    fontFamily: "Poppins",
    fontSize: "14px",
    background: "#644EEC",
    "&:hover": {
      background: "#120781",
    },
  },
  logo: {
    height: "47px",
    width: "135px",
    margin: "27px 0 15px 31px",
  },
  item: {
    width: "221px",
    color: "#fff",
    background: "#111113",
    textTransform: "initial",
    alignItems: "left",
    justifyContent: "left",
    padding: "12px 0 12px 25px",
    fontFamily: "Poppins",
    fontSize: "14px",
    "&:hover": {
      background: "#644EEC",
    },
  },
  active: {
    background: "#644EEC",
  },
}));

const CustomDrawer = (props) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const [, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/login");
  };

  const menuList = [
    {
      icon: <DashboardOutlinedIcon style={{ color: "white" }} />,
      text: "Tentang Kami",
      path: "/admin/tentang-kami",
      onClick: () => history.push("/admin"),
    },
    {
      icon: <AssessmentOutlinedIcon style={{ color: "white" }} />,
      text: "Projek Kami",
      path: "/admin/projek",
      onClick: () => history.push("/admin/projek"),
    },
    {
      icon: <SupervisorAccountOutlinedIcon style={{ color: "white" }} />,
      text: "Anggota",
      path: "/admin/anggota",
      onClick: () => history.push("/admin/anggota"),
    },
    {
      icon: <DescriptionOutlinedIcon style={{ color: "white" }} />,
      text: "Testimoni",
      path: "/admin/testimoni",
      onClick: () => history.push("/admin/testimoni"),
    },
    {
      icon: <SpeakerNotesOutlinedIcon style={{ color: "white" }} />,
      text: "Permintaan",
      path: "/admin/permintaan",
      onClick: () => history.push("/admin/permintaan"),
    },
  ];

  return (
    <Drawer {...props}>
      <div className={classes.toolbar}>
        <img src={LogoAdmin} className={classes.logo} alt="Mamen Admin" />
        <hr style={{ background: "#1D1C21", border: "0", margin: "0", height: "1px" }} />
      </div>
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.menu}>
        <List style={{ padding: "0" }}>
          {menuList.map(({ text, icon, path, onClick }, index) => (
            <ListItem key={text}>
              <Button
                variant="contained"
                onClick={onClick}
                className={`${classes.item} ${pathname.includes(path) && classes.active}`}
                startIcon={icon}
              >
                {text}
              </Button>
            </ListItem>
          ))}
        </List>

        <Button
          variant="contained"
          onClick={handleLogout}
          className={classes.marginBottom}
          startIcon={<ExitToAppOutlinedIcon style={{ color: "white" }} />}
        >
          Keluar
        </Button>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
