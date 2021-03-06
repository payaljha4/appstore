import React, { Component } from 'react'

class OsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      statusChange(event) {
        this.setState({value: '{this.state.value1}'});
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your Status is: ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
          Name:
          <input type="text" value={this.state.value1} onChange={this.handleChange} />
            </label>
        <label>
          Status:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            
          </select>
        </label>
        <input  type="submit" value="Submit" />
      </form>
        )
    }
}

export default OsForm
