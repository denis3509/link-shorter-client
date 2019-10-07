import React from 'react'
import {connect} from 'react-redux'
import MainPage from '../components/mainPage'
import {compose, bindActionCreators} from 'redux'
import * as mainPageActions from '../actions/mainPage'
import * as userActions from "../actions/user";


const mapStateToProps = (state) => {
  const {
    table, shortUrl, isLoadingTable, errorTable, isLoadingShortUrl, errorShortUrl
  } = state.mainPage;
  const {isAuth} = state.user;
  return {
    table, shortUrl, isLoadingTable, errorTable, isLoadingShortUrl, errorShortUrl, isAuth
  }
};

const mapDispatchToProps = (dispatch) => ({
  mainPageActions: bindActionCreators(mainPageActions, dispatch),
});

const LoginContainer = WrappedComponent => {
  return class extends React.Component {


    componentWillMount() {

      const {isAuth, mainPageActions} = this.props;
      mainPageActions.getTable()
    }

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
)(MainPage);