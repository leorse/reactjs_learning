import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
     };
     findDomNodeHandler() {
         var myDiv = document.getElementById('monDiv');
         ReactDOM.findDOMNode(myDiv).style.color = 'red';
     };
   render() {
       var i=10;
       var myStyle = {
            color:'#FFFF00',
            fontSize:100
       };
      return (
        <div>
            <button onClick={this.findDomNodeHandler}>trouver NODE</button>
            <div id="monDiv">noeud</div>
         </div>
      );
   };
}


export default App;
