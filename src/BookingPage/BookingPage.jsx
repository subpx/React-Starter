import React from "react";
import { connect } from "react-redux";

class BookingPage extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="col-sm-8 mx-auto">
          <h1>Booking</h1>
          <p>
            This example is a quick exercise to illustrate how the navbar and
            its contents work. Some navbars extend the width of the viewport,
            others are confined within a <code>.container</code>. For
            positioning of navbars, checkout the{" "}
            <a href="../navbar-top/">top</a> and{" "}
            <a href="../navbar-top-fixed/">fixed top</a> examples.
          </p>
          <p>
            At the smallest breakpoint, the collapse plugin is used to hide the
            links and show a menu button to toggle the collapsed content.
          </p>
          <p>
            <a
              className="btn btn-primary"
              href="../../components/navbar/"
              role="button"
            >
              View navbar docs »
            </a>
          </p>
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

const connectedBookingPage = connect(mapStateToProps)(BookingPage);
export default connectedBookingPage;
