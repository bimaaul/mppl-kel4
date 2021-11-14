import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from "@material-ui/core";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  menu: {
    marginTop: "12%",
    height: "100%",
  },
  marginBottom: {
    marginBottom: "10%",
  },
}));

const CustomDrawer = (props) => {
  const history = useHistory();

  const menuList = [
    {
      icon: <DashboardOutlinedIcon />,
      text: "Tentang Kami",
      onClick: () => history.push("/admin"),
    },
    {
      icon: <AssessmentOutlinedIcon />,
      text: "Projek Kami",
      onClick: () => history.push("/admin/projek"),
    },
    {
      icon: <SupervisorAccountOutlinedIcon />,
      text: "Anggota",
      onClick: () => history.push("/admin/anggota"),
    },
    {
      icon: <DescriptionOutlinedIcon />,
      text: "Testimoni",
      onClick: () => history.push("/admin/testimoni"),
    },
    {
      icon: <SpeakerNotesOutlinedIcon />,
      text: "Permintaan",
      onClick: () => history.push("/admin/permintaan"),
    },
  ];
  const classes = useStyles();

  return (
    <Drawer {...props}>
      <div className={classes.toolbar} />
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.menu}>
        <List>
          {menuList.map(({ text, icon, onClick }, index) => (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <ListItem button className={classes.marginBottom}>
          <ListItemIcon>
            <ExitToAppOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Keluar"} />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
