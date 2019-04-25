import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state={
      name: ''    }
  }
  componentDidMount(){
    this.props.getGender()
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({name: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getGender(this.state.name)
  }
  render() {
    return (
      <div>
        <h1 style={{fontSize: "2.9em"}}>Guess my <span>Gender</span></h1>
        <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        placeholder="Your First Name"
        autoComplete='off'
        required
        />
        <br/>
        <button>Search</button>
        </form>
        {this.props.gender && this.props.gender.gender === null? 
        null
        :
        <>
        <h1>Gender: <span className="percent">{this.props.gender.gender === "male"? "Male" : "Female"}</span></h1>
        <h1>Probability: <span className="percent">{this.props.gender.probability === 1 ? "100" : this.props.gender.probability}%</span></h1>
        </>
        }
      </div>
    );
  }
}

export default withData(App);