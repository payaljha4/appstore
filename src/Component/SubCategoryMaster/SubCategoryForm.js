import React, { Component } from 'react'

class SubCategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your Status is: ' + this.state.value);
        event.preventDefault();
      }
      onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
    
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h1 Sub SubCategoryForm />
            <label>
          Category Name:
          <input type="text" value={this.state.value1} onChange={this.handleChange} />
          </label>
            <label>
                
           Caregory ID:
          <input type="text" value={this.state.valueid} onChange={this.idChange} />
            </label>
            <label>
            <img src={this.state.image} />
           Select Image:
           <input type="file" name="myImage" onChange={this.onImageChange} />
            </label>
        <label>
          Status
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            
          </select>
        </label>
        <input  type="submit" value="Save" />
        <input  type="submit" value="Cancel" />
      </form>
        )
    }
}

export default SubCategoryForm
