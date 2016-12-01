import { render } from "react-dom"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval( this.increment.bind(this), 1000)
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;
    return (
      <header>
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>{counter}</div>
      </header>
    );
  }
}

const containerEl = document.getElementById("root");
render(<App/>, containerEl
);