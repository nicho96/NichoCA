import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        value: "",
        options: [],
        selectedIndex: null,
        isMemeing: false,
        selectedColor: 'black',
    }

    componentDidMount() {
        this._interval = setInterval(this._meme, 100);
    }

    render() {
        return (
            <div className="App">
                {this._renderOptionsTable()}
                <input className="Field"
                   value={this.state.value}
                   onChange={this._updateInput} />
                <button className="Button"
                    onClick={this._addPressed}>
                    Add
                </button>
                <button className="Button"
                    onClick={this._choosePressed}>
                    Choose
                </button>
            </div>
        );
    }

    _renderOptionsTable() {
        var rows = [];
        this.state.options.forEach((e, i) => {
            rows.push(
                <tr className="Row" key={i + ''}>
                    <td>
                        <div
                            className="Row-data"
                            style={{
                                color: this.state.selectedIndex == i ? this.state.selectedColor : 'black',
                            }}>
                            {e}
                        </div>
                    </td>
                </tr>
            )
        });
        return (
            <table>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }

    _updateInput = (e) => {
        this.setState({value: e.target.value});
    }

    _addPressed = () => {
        const value = this.state.value;
        if(value && value != "") {
            this.state.options.push(value);
            this.setState({value: ""});
        }
    }

    _choosePressed = () => {
        this.setState({
            selectedIndex: Math.floor(Math.random() * this.state.options.length)
        });
    }

    _meme = () => {
        if(this.state.selectedIndex != null) {
            this.setState({
                selectedColor: this._getRandomColor()
            })
        }
    }

    _getRandomColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

}

export default App;
