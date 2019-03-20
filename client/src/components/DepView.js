import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";
import { Link, } from 'react-router-dom'


class DepView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  deleteItem = (id) => {
    debugger
    axios.delete(`/api/departments/${this.props.match.params.id}`)
    .then( res => {
      const { department, } = this.state;
      this.setState({ department: department.filter(d => d.id !== id), })
    })
  }

  render() {
    const { name, } = this.state.department;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name } </Header>
        
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
        <Button onClick={this.deleteItem} as={Link} to={`/department`}>
          Delete
        </Button>
        {/* <Button as={Link} to={`/departments/${department.id}/items/${items.id}`}>
          Items
        </Button> */}

  

      </div>
    )
  }
}

export default DepView;
