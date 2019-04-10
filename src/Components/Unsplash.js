import React, { Component } from 'react';
import reload from "../reload.svg";
import Clock from './Clock';
import Credits from './Credits';
import Image from './Image';
import MemoList from './MemoList';
import Quote from './Quote';
import "../Styles/Unsplash.css"


export class Unsplash extends Component {

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
        const url = 'https://source.unsplash.com/random';

        try {
            const result = await fetch(url);
            console.log(result)
            this.setState({
                src: result.url,
            })

        } catch (error) {
            console.log(error);
        }
    };

    imageClick = () => {
        console.log("Change background!")
        this.fetchAsync();
    }


    render() {
        return (
            <div className="container">
                <Clock />
                <img src={reload} className="reload" alt="logo" onClick={this.imageClick} />
                <MemoList />
                <Image src={this.state.src} />
                <Quote />
                <Credits />
            </div>

        )
    }
}

export default Unsplash
