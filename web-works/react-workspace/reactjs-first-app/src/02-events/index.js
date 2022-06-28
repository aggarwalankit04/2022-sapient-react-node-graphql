import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {

    // constructor() {
    //     super();
    //     this.btnHandler = this.btnHandler.bind(this);
    // }

    // btnHandler() {
    //     console.log("you invoked btnHandler()", this);
    // }

    btnHandler = () => {
        console.log("you invoked btnHandler()", this);
    }

    newBtnHandler = () => {
        console.log("you invoked btnHandler()", this);
    }
    state = { num: 100 }

    increment = () => {
        //console.log("State value is ", this.state.num);
        // dont mutate the state object directly instead use setState
        // this.state.num++;

        // when you mutate the value using setState it does 2 things 
        // 1. mutation 2. re-render 
        this.setState({ num: this.state.num + 1 });
    }

    decrement = () => {
        this.setState({ num: this.state.num - 1 });
    }
    incrementOrDecrement // do something 
    render() {

        // never call setState in render 
        this.setState({ num: this.state.num + 1 });
        return (
            <div className="app-content">
                <h3>This is the content area of the application</h3>
                {/* 
                    the function has to be explicitly binded, if not the reference of the caller is undedefined 
                <button onClick={this.btnHandler.bind(this)} className="btn btn-primary" >Click Me</button> */}

                <button onClick={this.btnHandler} className="btn btn-primary" >Click Me</button>
                <button onClick={this.newBtnHandler} className="btn btn-primary" >Click Me</button>
                {/* you can bind nay number of function*/}
                <hr />
                <h3>Value of Num is {this.state.num}</h3>
                {/* in this care the increment is not calling instead the reference is passed  */}
                <button className="btn btn-primary" onClick={this.increment} >Increment</button>
                <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default App;