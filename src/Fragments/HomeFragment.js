import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export class HomeFragment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value : 0
        }
    }
    
     handleChange = (event, newValue) => {
        this.setState({
            value:newValue

        })
        
        
      };
    render() {
        return (
        <Container maxwidth="md" fixed>
        <AppBar position="static" color="black">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One"  />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
          <Tab label="Item Four"  />
          <Tab label="Item Five"  />
          <Tab label="Item Six"  />
          <Tab label="Item Seven"  />
          <Tab label="Item Eight"  />
          <Tab label="Item Nine"  />
          <Tab label="Item Ten"  />
        </Tabs>
      </AppBar>
      
    </Container>
      );
    }
}

export default HomeFragment





