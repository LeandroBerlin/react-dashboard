import React, { Component } from 'react';

import "../Styles/Qod.css"


export class Quote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: ''
        };
    }

    componentDidMount() {
        this.fetchAsync();
    }

    async fetchAsync() {
        const url = 'https://favqs.com/api/qotd';

        try {
            const result = await fetch(url);
            const quoteObj = await result.json();
            console.log(quoteObj)
            const { body: quote, author } = await quoteObj.quote;

            this.setState({
                quote: quote,
                author: author
            })

        } catch (error) {
            console.log(error);
        }
    };


    render() {
        return (
            <div className="qod">
                {this.state.quote} <p>({this.state.author})</p>
            </div>

        )
    }
}

export default Quote
