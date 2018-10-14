import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to='/create'>Create Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Sign Out</a>
      </li>
      <li>
        <NavLink to='/' className="btn btn-floating pink ligthen-1">NN</NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
