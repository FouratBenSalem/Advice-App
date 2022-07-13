import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {   // like a global object containing important things of component
        advice: ''
    };

    //lifecycle methods, render, didmount; didupdate, willunmount
    componentDidMount(){ // executes exactly at render of our component
        console.log('Component did mount');

        this.fetchAdvice()
    } 

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=> {
            const {advice} = response.data.slip;

            console.log(advice); 
            this.setState({ advice: advice }); // or just advice bc property & value have same name
        })
        .catch((error) =>{
            console.log(error);
        });

    }

    render() {
        const {advice} = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
                
            </div>
        );
    }
}

export default App;