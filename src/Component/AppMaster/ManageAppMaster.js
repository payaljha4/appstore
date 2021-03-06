import React, { Component } from 'react'

class ManageAppMaster extends Component {


    testfun()
    {
        alert('We are Redirecting you to Add App Master Page')
    }
    
    render() {
        return (
            <div>
                <h1>Add App Master Form</h1>
                <button onClick={()=>this.testfun()}>Click Me</button>
            </div>
        )
    }
}

export default ManageAppMaster
