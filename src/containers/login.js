import React from 'react'
import {connect} from 'react-redux'
import Login from '../components/login'
import {compose, bindActionCreators} from 'redux'
import * as userActions from '../actions/user'


const mapStateToProps = (state) => {
  const {
    message,
    error,
  } = state.user;
  return {
    message, error,
  }
};

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
});

const LoginContainer = WrappedComponent => {
  return class extends React.Component {


    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  };

};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  LoginContainer
)(Login);