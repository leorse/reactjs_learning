import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           header: "Header from props...",
           content: "Content from props..."
        }
     }
   render() {
       var i=10;
       var myStyle = {
            color:'#FFFF00',
            fontSize:100
       };
      return (
        <div>
            <Header headerProp={this.state.header} />
            <Content contentProp={this.state.content}/>
         </div>
      );
   }
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
