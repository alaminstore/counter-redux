import React, { useEffect } from "react";
import { usersList } from "../services/actions/userAction";
import { connect } from "react-redux";

const Users = ({ usersList, loading, users, error }) => {
  useEffect(() => {
    usersList();
  }, []);
  
  return (
    <div>
      == Users ==
      {loading ? (
        <h3>Loading... </h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {users.map((user) => {
            return (
              <table className="table">
                <tr>{user.title}</tr>
              </table>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  error: state.userReducer.error,
});

export default connect(mapStateToProps, { usersList })(Users);
