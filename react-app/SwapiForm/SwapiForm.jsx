import React from 'react';

class SwapiForm extends React.Component {

    constructor(){
        super();

        this.state = {
            query: 'people/1',
            responseData: {}
        };

        this.getSwapiData = this.getSwapiData.bind(this);
        this.setQuery = this.setQuery.bind(this);
    }

    setQuery(e){
        const query = e.target.value;
        this.setState({
            query,
        });
    }

    getSwapiData() {
        return fetch(`https://swapi.co/api/${this.state.query}?format=json`, {
            method: 'GET',
            mode: 'cors',
            accept: 'application/json'
        })
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                responseData
            });
        });
    };

    render() {
        return (
            <div>
                <input type="text" id="query" onChange={this.setQuery} value={this.state.query}/>
                <button type="button" id="submit-button" onClick={this.getSwapiData}>Submit</button>
                <pre id="response-data">{JSON.stringify(this.state.responseData)}</pre>
            </div>
        );
    }
}

export default SwapiForm;
