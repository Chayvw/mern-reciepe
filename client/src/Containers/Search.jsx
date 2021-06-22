import React, { Component } from 'react';
import axios from 'axios';
// import { response } from 'express';

class Search extends Component {
    constructor(){
        super()

        this.state={
            userInput: "",
            results: ""
        }

        }
        handleUserInput = (event) =>{
            event.preventDefault();
            const query = this.state.userInput;
            const url = `https://api.edamam.com/search?q=chicken&ap_id=c06c8ad2&app_key=02e54c7f11fc157d0fef77be1af9f2ef`
            axios({
                url:url,
                method:'GET'
            }).then((response)=>{
                console.log(response)
                this.setState({
                    results: response

                }).catch(()=>{
                    alert("Error")
                })
            })
        }

        captureUserInput = (input) => {
            this.setState({
                userInput: input
            }, () => { console.log(input) })
        


    }
    render() {
        return (
            <div>
               <h1>Search Page</h1> 
               <input type="text"  placeholder="Reciepe Search" value={this.state.userInput} onChange={(event) => { this.captureUserInput(event.target.value) }} />
               <button onClick={this.handleUserInput}>Search</button>
            </div>
        );
    }
}

export default Search;