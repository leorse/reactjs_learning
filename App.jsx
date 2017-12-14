import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
     };
     setStateHandler() {
         var item = "setState:";
         var myArray = this.state.data.slice();
         myArray.push(item);
         this.setState({data:myArray});
     };
   render() {
       var i=10;
       var myStyle = {
            color:'#FFFF00',
            fontSize:100
       };
      return (
        <div>
            <button onClick={this.setStateHandler}>set state</button>
            <h4>state:{this.state.data}</h4>
         </div>
      );
   };
}

App.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props..."
 }

class Header extends React.Component {
    render() {
       return (
          <div>
             <h1>{this.props.headerProp}</h1>
          </div>
       );
    }
 }

 class Content extends React.Component {
     render() {
         return (
            <div>
             <h1>{this.props.contentProp}</h1>
          </div>
         )
     }
 }

export default App;
