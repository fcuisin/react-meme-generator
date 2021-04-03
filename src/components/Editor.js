import React from 'react';
import Meme from './Meme.js';

class MemeMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
      bottomText: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <form className="App-meme-form">
          <p>Top Text :</p>
          <input
            type="text"
            name="topText"
            placeholder="OMG!"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <p>Bottom Text :</p>
          <input
            type="text"
            name="bottomText"
            placeholder="You're crazy"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
        <Meme img={this.props.data} textTop={this.state.topText} textBottom={this.state.bottomText}/>
      </div>
    )
  }
}

export default MemeMaker
