// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count < 200 ? prevState.count + 10 : 200,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 10 : 0,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <h2 className="head2">Speed is {count}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="submit"
            className="accelarate-btn"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="submit"
            className="brake-btn"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
