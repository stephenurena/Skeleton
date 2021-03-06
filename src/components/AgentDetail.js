
import React from 'react';
import { connect } from 'react-redux';
import { selectAsMyAgent, loadError } from '../actions/auth'
import {selectAgent, sendComment} from '../actions/agent';
import {getSelectedAgent} from '../reducers';
import AgentComment from './AgentComment';
import AgentSingle from './AgentSingle';
import './Agent.scss';
import {moveToMessageRoute} from '../actions/chat';
import {FormattedMessage} from 'react-intl';
const Rating = require('react-rating');

class AgentDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      text: "",
      rate: 0
    };
    const { selectAgent } = this.props;
    const id = this.props.match.params.id;
    selectAgent(id);
    this.renderAgent = this.renderAgent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getComment = this.getComment.bind(this);
    this.getRadioValue = this.getRadioValue.bind(this);
  }

  renderAgent(){
    const {agent} = this.props;
    return(

      <AgentSingle className="col s12 m3 l3"
                   name={agent.name}
                   photo={agent.photoURL}
                   rating ={agent.avgRate}
                   email={agent.email}
                   phone={agent.phone}
                   languages={agent.languages}
                   description={agent.text}

      />
    )
  }

  getComment(event){

    let inputComment = event.target.value.trim();
    //console.log(inputComment);

    this.setState({
      text: inputComment
    });

  }

  handleSubmit(event){
    event.preventDefault();
    const {agent, user, loadError, sendComment} = this.props;
    if(!user) return loadError("You should login to post a comment.");

    let postComment ={
      text: this.state.text,
      rate: this.state.rate
    };
    sendComment({comment: postComment, agentId: agent._id});
    this.setState({
      rate: 0,
      text: ""
    });
    $("#icon_prefix2").val(''); //clear text input

  }

  getRadioValue(rate){

    this.setState({
      rate: rate
    });
  }

  render() {

    const {user, agent, selectAsMyAgent, moveToMessageRoute} = this.props;

    // console.log("MYAGENT ID",user.myAgent._id);

    return (
      <div className="container themeAgent row">

        <h5><FormattedMessage id="app.agentDetail.details" /></h5>
        <hr/>

        {user && user.myAgent && agent._id === user.myAgent._id && <div className="container center-align myAgentBox"><h4><FormattedMessage id="app.agentDetail.agent" /></h4></div>}

        <div className="right-align selectButtonContainer">
          {user && user.myAgent && agent._id !== user.myAgent._id && <button onClick={selectAsMyAgent.bind(null, agent)} className="btn themeButton"><i className="material-icons left">done</i><FormattedMessage id="app.agentDetail.select"/></button>}
          <br/>
          {user && <button onClick={moveToMessageRoute.bind(null, agent._id)} className="btn themeButton"><i className="material-icons left">send</i><FormattedMessage id="app.agentDetail.send" /></button>}
        </div>

        {agent && this.renderAgent()}

        <div className="container commentContainer">
          {agent.comments && agent.comments.map( (comment,index)=>{
            return <AgentComment key={index} comment={comment.text} created={comment.createdAt} authorName={comment.author.name} authorPhotoURL={comment.author.photoURL} rate={comment.rate}/>
          })}
        </div>

        <div className="container addCommentContainer">
          <Rating
            initialRate={this.state.rate}
            empty="fa fa-star-o fa-2x"
            full={['fa fa-star fa-2x rateColor']}
            fractions={2}
            onClick={this.getRadioValue}
          />
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="input-field">
                <i className="material-icons prefix">mode_edit</i>
                <input type="text" id="icon_prefix2" className="materialize-textarea" onChange={this.getComment}/>
                <label htmlFor="icon_prefix2"><FormattedMessage id="app.agentDetail.comment" /></label>
              </div>
            </div>
            <button type='submit' className="btn themeButton"><FormattedMessage id="app.agentDetail.submitBtn" /></button><br/>
          </form>
        </div>
      </div>
    );

  }
}

export default connect(
  state => ({
    user: state.auth.user,
    agent: getSelectedAgent(state)
  }),
  { selectAsMyAgent, selectAgent, moveToMessageRoute, loadError, sendComment }
)(AgentDetail);