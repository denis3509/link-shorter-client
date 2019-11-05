import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  isAuth: state.user.isAuth,
});
const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch)

});
const Header = (props) => {
  const classes = useStyles();
  const {userName, isAuth, userActions} = props;
  userActions.getUser();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Link shortener app
          </Typography>
          {!isAuth && <Button color="inherit" href="/login">Login</Button>}
          {isAuth &&
          <Button
            color="inherit"
            onClick={() => userActions.logout(() => document.location.href = '/mainPage')}
          >
            Logout
          </Button>}

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);