import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export class DashboardAgents extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      agentInfo: {}
    }

  }

  componentDidMount() {

    let user = this.props.user;
    //console.log("USER", user);

    if (user) {
      axios.put('/api/users/' + user._id, {myAgent: "5957cefb34852a0efc3cc5ec"}).then(res => {
        //console.log("response", res);
        this.setState({
          agentInfo: res.data.myAgent
        });
      });
    }
  }

  render() {

    const user = this.props.user;

    return (
      <div className="container col s12 m9 l9 center-align agents">
        <h5>My Agent</h5>
        <hr/>
        <div className="container center-align" style={{padding:'60px'}}>
          {!user && <h5>You must be signed in to see agent info</h5>}
          {user && <img className="photo" width="100px" src={this.state.agentInfo.photoURL} alt="agent photo"/> }
          {user && <h5>{this.state.agentInfo.name}</h5>}
          {user && <NavLink className="btn langButton" to={'/agents/'+this.state.agentInfo._id}>Profile</NavLink>}

        </div>

      </div>
    );
  }
}

DashboardAgents.propTypes = {
  user: PropTypes.object
};

export default connect(
  ({auth}) => ({ user: auth.user}),
// Implement map dispatch to props
)(DashboardAgents)

