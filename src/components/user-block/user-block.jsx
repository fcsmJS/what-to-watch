import React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import PropTypes from "prop-types";

import {AuthorizationStatus} from "../../store/reducers/user/user.js";
import {getAuthorizationStatus, getUserData} from "../../store/reducers/user/selectors";

import {AppRoute, BASE_URL} from "../../consts.js";

const UserBlock = (props) => {

  const {authorizationStatus, user} = props;

  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH ?
          <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src={`${BASE_URL}${user.avatar_url}`} alt="User avatar" width="63" height="63"/>
            </div>
          </Link> :
          <Link
            to={AppRoute.LOGIN}
            style={{cursor: `pointer`, textDecoration: `none`, color: `inherit`}}
          >
              Sign In
          </Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    user: getUserData(state)
  };
};

export default connect(mapStateToProps)(UserBlock);