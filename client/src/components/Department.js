import React from "react";
import { Card, Header, Button, Container,} from "semantic-ui-react";
import axios from 'axios'
import { Link, } from 'react-router-dom'

class Department extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data})
      })
  }
  

  renderDepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>No Department</h2>
    return departments.map( department => (
      <Card fluid color='red'>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
          <Card.Meta>{ department.department }</Card.Meta>
          <Card.Description>
            { department.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/depview/${department.id}`} color='orange'>
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <Container >
      
      
        <Header as="h1" style={{ textAlign: 'center', }}>Department</Header>
        <br />
        <br />
        <Button as={Link} color='green' to='/depform/new'>
          Add New Department
        </Button>
        <br />
        <br />
        <Card.Group >
            { this.renderDepartments() }
      
            
        </Card.Group>
      
      </Container>
    )
  }
}

export default Department;