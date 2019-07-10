import React from 'react';
class Todoitem extends React.Component {
  shoot = () => {
    console.log("Great Shot!");
  }
  render() {
    const { item } = this.props;
    let className = 'TodoItem';
    if (item.isComplete){
      className += ' TodoItem-complete';
    }
    
    return <div className={className}>
      <p>{this.props.item.title}</p>
      {/* <button onClick={this.shoot}>Take the shot!</button> */}

    </div>;
  }

}
export default Todoitem;
