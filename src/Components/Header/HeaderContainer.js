import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import setAuthUserData from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
   axios.get(
          `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
        )
        .then((response) => {
          if (response.data.resultCode === 0) {
            let {userId, login, email} = response.data.data;
          this.props.setAuthUserData(userId, login, email);
          }
        });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
