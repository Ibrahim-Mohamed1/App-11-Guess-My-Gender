import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            gender: []
        }
    }

    getGender = (name) => {
        axios.get(`https://api.genderize.io/?name=${name}`).then(res => {
            this.setState({
                gender: res.data
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getGender: this.getGender,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}