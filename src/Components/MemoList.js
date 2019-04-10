import React, { Component } from 'react'
import "../Styles/MemoList.css"
import ItemsList from './ItemsList';

export class MemoList extends Component {

    constructor(props) {
        super(props)

        this.localStorage = JSON.parse(localStorage.getItem('items'))
        console.log(localStorage.getItem('items'))
        console.log(this.localStorage)
        this.items = (this.localStorage !== null ? this.localStorage : [])

        this.state = {
            text: '',
            items: this.items
            // this.state.items = JSON.parse(localStorage.getItem("items")) || [];
        }
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line
        const newItem = {
            id: Date.now(),
            text: this.state.text
        }
        const newItems = this.state.items.concat(newItem);
        this.setState(
            state => ({
                items: newItems,
                text: ''
            })
        )
        // update localStorage
        localStorage.setItem("items", JSON.stringify(newItems));
    }

    render() {
        return (
            <div className="memolist">
                <h3>My plan for the day!</h3>

                <ItemsList items={this.state.items} />

                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="listItem" onChange={this.handleChange} value={this.state.text}></input>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
}

export default MemoList
