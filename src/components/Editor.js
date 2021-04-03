import React from 'react';
import Meme from './Meme.js';

class MemeMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
      bottomText: '',
      color: '#000',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleChangeColor(event) {
    if(event.target.value === "white") {
      this.setState( {color: '#fff'})
    } else if (event.target.value === "black") {
      this.setState( {color: '#000'})
    }
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
          <select name="color"
          onChange={this.handleChangeColor}
          >
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </form>
        <Meme img={this.props.data} textTop={this.state.topText} textBottom={this.state.bottomText} color={this.state.color}/>
      </div>
    )
  }
}

export default MemeMaker
