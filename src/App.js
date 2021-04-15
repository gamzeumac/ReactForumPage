import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container, AppBar,Grid,
Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PenIcon from "@material-ui/icons/Create";
import Postslist from "./components/Postslist";
import AddPostFrom from "./components/AddPostForm";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));


const App =() => {
  const [ open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  
  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.container} color="inherit" />
          <Typography variant="h6" color="secondary" className={classes.title}>
            <a href="http://localhost:3000/posts">My Blog</a>

          </Typography>
          <Button color="primary" variant="outlined" startIcon={<PenIcon/>}>
            New Erstellt
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Router>
            <Switch>
              <Route exact path="/posts" component={Postslist} />
            </Switch>
            <Redirect from="/" to="/posts"></Redirect>
          </Router>

        </Grid>
      </Grid>
    </Container>
    <AddPostFrom open={open} handleClose={handleClose} />
    </>

  );
};

export default App;
