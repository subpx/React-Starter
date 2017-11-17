import React from "react";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import styles from "./loginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <form className={styles.formSignin} onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          {submitted &&
            !username && <div className="help-block">Username is required</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {submitted &&
            !password && <div className="help-block">Password is required</div>}
        </div>
        <div className="form-group">
          <button className="btn btn-lg btn-primary btn-block">Sign in</button>
          {loggingIn && <div>Logging in</div>}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export default connectedLoginPage;
