
import React, {Component} from 'react';

let timerid;
class BonusContent extends Component {

   state = {
        timerid: -1,
        sessionEnd: false, 
  }

  componentDidMount()
  {
    this.setState({ timerid: this.getSessionTimeout() });
  }

  componentWillUnmount()
  {
    clearTimeout(this.state.timerid);
  }

  getSessionTimeout()
  {
      if (this.state.timerid)
      {
          clearTimeout(this.state.timerid);
      }
      timerid = setTimeout(() =>
      {
          this.setState({sessionEnd : true});
      }, this.props.expires);
      return timerid;
  }

  render(){
    if(this.state.sessionEnd)
    {
      return (null);
    }
    return (
        
        <div className="bonus" key={this.props.id}>
            <h3>{this.props.title}</h3>
            <p>{this.props.requirement}</p><hr />
        </div>
    );
   }
}

export default BonusContent;











