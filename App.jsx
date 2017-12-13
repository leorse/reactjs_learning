import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"MonNom",
                    "age":"25"
                },
                {
                    "id":3,
                    "name":"Encore",
                    "age":"30"
                }
            ]
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
        <Header/>
        <table>
            <tbody>
                {this.state.data.map((person, i)=><TableRow key={i} data={person} />)}
            </tbody>
        </table>
     </div>
      );
   }
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