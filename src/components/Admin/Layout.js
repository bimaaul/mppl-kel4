import { useState } from "react";
import Drawer from "./Drawer";
import { AppBar, CssBaseline, Hidden, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import UserMenu from "./Menu";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#0D0C0F"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: "94.61px",
      marginLeft: drawerWidth,
      background: "#0D0C0F"
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
}));

function Layout(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevOpen) => !prevOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <UserMenu />
        </Toolbar>
      </AppBar>
      <hr style={{background: "#1D1C21", border: '0', margin: "0", height: "1px"}}/>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          />
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
