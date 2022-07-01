import {
  alpha,
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Cancel, ExitToApp, Search } from "@material-ui/icons";
import React, { useState } from "react";

const settings = [ 'Perfil', 'Sair']

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  iconsLogout: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
    color: "white",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Clinica PetShop
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          PetShop
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Tooltip title="Sair">
            <IconButton className={classes.iconsLogout}>
              <ExitToApp />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;