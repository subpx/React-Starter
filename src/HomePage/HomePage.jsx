import React from "react";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import BookingPage from "../BookingPage";
import Dashboard from "../DashboardPage";

// import { userActions } from "../_actions";

class HomePage extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    // this.props.dispatch(userActions.getAll());
  }

  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <a className="navbar-brand" href="http://www.google.com">
              Navbar
            </a>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/booking"
                  >
                    Booking
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/booking" component={BookingPage} />
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export default connectedHomePage;
