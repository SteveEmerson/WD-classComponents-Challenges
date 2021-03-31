import React, { Component } from 'react';

class DogIndex extends Component {
  constructor() {
    super();
    this.state = {
      dogImageUrl: ""
    }
  }

  componentDidMount(){
    this.getDog();
  }

  getDog = () => {
    let url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({dogImageUrl: json.message})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='main'>
        {this.state.dogImageUrl
        ? <img src={this.state.dogImageUrl} alt="doggo"/>
        : <h4> No Doggo </h4>}
        <br/>
        <br/>
        <button onClick={()=>this.getDog()}>Get a Doggo</button>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default DogIndex;