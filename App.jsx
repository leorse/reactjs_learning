import React from 'react';

class App extends React.Component {
   render() {
       var i=10;
       var myStyle = {
            color:'#FFFF00',
            fontSize:100
       };
      return (
        <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
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
             <h1>Header</h1>
          </div>
       );
    }
 }

 class TableRow extends React.Component {
     render() {
         return (
             <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
         )
     }
 }

export default App;
