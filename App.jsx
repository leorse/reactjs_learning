import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
     };
     forceUpdateHandler() {
         this.forceUpdate();
     };
   render() {
       var i=10;
       var myStyle = {
            color:'#FFFF00',
            fontSize:100
       };
      return (
        <div>
            <button onClick={this.forceUpdateHandler}>set state</button>
            <h4>random number:{Math.random()}</h4>
         </div>
      );
   };
}


export default App;
