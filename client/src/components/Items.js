import React from "react";
import { Card, Header, Button, Container,} from "semantic-ui-react";
import axios from 'axios'
import { Link, } from 'react-router-dom'

class Items extends React.Component {
  state = { items: [], };

  componentDidMount() {
    axios.get('/api/departments/:department_id/items')
      .then( res => {
        this.setState({ items: res.data})
      })
  }
  

  renderItems = () => {
    const { items, } = this.state;

    if (items.length <= 0)
      return <h2>No Items</h2>
    return items.map( item => (
      <Card fluid color='red'>
        <Card.Content>
          <Card.Header>{ items.name }</Card.Header>
          <Card.Meta>{ items.price }</Card.Meta>
          <Card.Description>
            { items.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <Button as={Link} to={`/depview/${items.id}`} color='orange'>
            View
          </Button> */}
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <Container >
      
      
        <Header as="h1" style={{ textAlign: 'center', }}>Items</Header>
        <br />
        <br />
        {/* <Button as={Link} color='green' to='/depform/new'>
          Add New Items
        </Button> */}
        <br />
        <br />
        <Card.Group >
            { this.renderItems() }
      
            
        </Card.Group>
      
      </Container>
    )
  }
}

export default Items;