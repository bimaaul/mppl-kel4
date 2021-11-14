import { useState, useRef } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  Button,
  Avatar,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  adminName: {
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "nowrap",
      width: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const UserMenu = () => {
  const anchorRef = useRef(null);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.menu}>
      <Button>
        <Avatar className={classes.small}></Avatar>
        <span style={{ padding: "0 20px 0 12px" }} className={classes.adminName}>
          Ali Naufal Ammarullah
        </span>
      </Button>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <NotificationsIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  <MenuItem>Notif1</MenuItem>
                  <MenuItem>Notif2</MenuItem>
                  <MenuItem>Notif3</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default UserMenu;
