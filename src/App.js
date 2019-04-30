import React from 'react';
import Header from './Header';
import './App.css';
import cowsay from 'cowsay-browser';
import faker from 'faker';

export default class App extends React.Component {
    constructor(props) {// props sorta like html attributes
        super(props); // super is React.component constructor
        this.state = {};
        this.state.content = faker.lorem.sentence;
    }

OnClick = () => {
    this.setState(() => {
        return {
            message: this.state.content,
        };
    });
};


render(){
    return(
        <main>
            <Header/>
        <button onClick={this.OnClick}> click me </button>
            <pre>
            {cowsay.say({
                    text: `The Sentence Is: ${this.state.content()}`,
                    e: "oO",
                    T: "U "
                })}
            </pre>
        </main>
        );
    };
}