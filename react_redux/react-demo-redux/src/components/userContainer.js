import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

function UserContainer(props) {
  useEffect(() => {
    props.getUserData();
  }, []);
  return (
    <>
      <div>Users</div>
      <div>
        {props.userData.users.map((user) => (
          <p>{user}</p>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
