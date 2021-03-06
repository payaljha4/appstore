import React, { Component } from 'react'
import { Box } from '@material-ui/core'
import ReactBootstrap, {Jumbotron, Button, Form, Col, Grid, Panel, FormGroup} from 'react-bootstrap'

class AppMasterForm extends Component {
    render() {
        return (
            <Box 
            border-radius= {"5px"}
            bgcolor= {"#f2f2f2"}
            p= {"20px"}>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label 
    App type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>App Name</Form.Label>
    <Form.Control type="appname" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Age Group</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group><Form.Group controlId="formBasicEmail">
    <Form.Label>Device Type</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Device Os</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Keywords</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Country</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Category</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Sub Category</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Language</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Developed By</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>App URL</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>App Support</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Short Description</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Long Description</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>App Icon</Form.Label>
    <Form.Control type="appid" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Media 1 URL</Form.Label>
    <Form.Control type="url" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Media 2 URL</Form.Label>
    <Form.Control type="url" placeholder="" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
 <Form.Group controlId="formBasicPassword">
    <Form.Label>Media 3 URL</Form.Label>
    <Form.Control type="url" placeholder="" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Save
  </Button>
  <Button variant="primary" type="submit">
    Cancel
  </Button>
</Form>
</Box>
        )
    }
}

export default AppMasterForm
