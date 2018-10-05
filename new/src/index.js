import React from 'react';
import ReactDOM from 'react-dom';


class Hallo extends React.Component {

    constructor(props){
        super(props);
       this.state = {
           anzahl : 1
       }
    }
    componentDidMount(){
        this.setState({anzahl: this.state.anzahl - 5 });
    }
    static defaultProps = {name: "Müller" };
    render(){
        
        return (
        <div>
            <h1>
            <Greeting welcome={this.props.welcome}/> {this.props.name}
            </h1>
             {this.state.anzahl}
         </div>
        );
    }

}
class Greeting extends React.Component{
    render(){
        if (this.props.welcome === true) {
            return(<span>Willkommen</span>);
        }
        else{
            return <span>Bey</span>
        }
    }
}

ReactDOM.render(<Hallo  welcome={false}  />, document.getElementById('root'));

