import React from 'react';
import { connect } from 'react-redux';
import { selectAgent } from '../actions/agent'
import {getSelectedAgent} from '../reducers';
import AgentComment from './AgentComment';
import AgentSingle from './AgentSingle';
import './Agent.scss';
import axios from "axios";

class AgentDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      newComment: "",
      newRating: ""
    }
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

  handleSubmit(event){

    event.preventDefault();
    const {agent} = this.props;

    let postComment ={
      text: this.state.newComment,
      rate: this.state.newRating
    }
    axios.post('/api/comments/'+agent._id, postComment);

  }

  getComment(event){

    let inputComment = event.target.value.trim();
    //console.log(inputComment);

    this.setState({
      newComment: inputComment
    });

  }

  getRadioValue(event){

    let inputRadio = event.target.value;
    //console.log(inputRadio);

    this.setState({
      newRating: inputRadio
    });

  }

          

  render() {

    const {agent} = this.props;
    //console.log(agent);

    return (
      <div className="container themeAgent row">
          <h5>Agent Details</h5>
          <hr/>

      <div className=" col s12 m12 l12 right-align selectButtonContainer">
        <button className="btn themeButton"><i className="material-icons left">done</i>Select as my</button>
      </div>

      {agent && this.renderAgent()}
       

      <div className="col s12 m9 l9 container commentContainer">
        <h5>Comments on this agent</h5>
        <hr/>
       {agent.comments && agent.comments.map( (comment,index)=>{
          return <AgentComment key={index} comment={comment.text} created={comment.createdAt}/>
       })}
      </div>


      <div className="col s12 m9 l9  offset-m3 offset-l3 container addCommentContainer">
        <form onSubmit={this.handleSubmit}>
                <div>

                <div onChange={this.getRadioValue}>
                  <span>Rate this Agent</span>
                  <hr/>
                  <input name="group1" type="radio" id="test1" value="1"/>
                  <label className="stars" htmlFor="test1">&#x2605;</label>
                  <br/>
                  <input name="group1" type="radio" id="test2" value="2"/>
                  <label className="stars" htmlFor="test2">&#x2605; &#x2605;</label>
                  <br/>
                  <input name="group1" type="radio" id="test3" value="3"/>
                  <label className="stars" htmlFor="test3">&#x2605; &#x2605; &#x2605;</label>
                  <br/>
                  <input name="group1" type="radio" id="test4" value="4"/>
                  <label className="stars" htmlFor="test4">&#x2605; &#x2605; &#x2605; &#x2605;</label>
                  <br/>
                  <input name="group1" type="radio" id="test5" value="5"/>
                  <label className="stars" htmlFor="test5">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</label>
                  <br/>
                </div>

                  <div className="input-field">
                    <i className="material-icons prefix">mode_edit</i>
                    <input type="text" id="icon_prefix2" className="materialize-textarea" onChange={this.getComment}></input>
                    <label htmlFor="icon_prefix2">Write a Comment</label>
                  </div>
                </div>  
        </form>
      </div>

      </div>
    );

  }
}

export default connect(
  state => ({agent: getSelectedAgent(state)}),
  { selectAgent }
)(AgentDetail);