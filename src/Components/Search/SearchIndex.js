import React, { Component } from 'react';
import {Input} from 'reactstrap';

 

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      term: ""
    }
  }

  searchFunction = (e) => {
    this.setState({term: e.target.value});
  }

 render() {
  return(
     <div>
       <Input placeholder='Search Here' onChange={(e) => this.searchFunction(e)}/>
       <h3>Results:</h3>
       {this.state.things.filter((thing) => thing.startsWith(this.state.term)).map(item => <p>{item}</p>)}
     </div>
  )
 }
}

 
export default SearchIndex;
