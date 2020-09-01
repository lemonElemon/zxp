// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.parentNode)
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM. 
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={(e) => this.handleClick(e)}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        
        <Child />
        
      </div>
    );
  }
}

class Child extends React.Component {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  handleClick(e){
    console.log(1)
  }
  render (){
    return(
      <div className="modal">
        <button onClick={(e) => this.handleClick(e)}>Click</button>
      </div>
    )
    
  };
}

ReactDOM.render(<Parent />, appRoot);
