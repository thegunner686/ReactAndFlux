let React = require("react");

export default class Number extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: Math.random(),
      })
    }, Math.random() * 10);
  }

  render() {
    return (
      <div>
        {this.state.number}
      </div>
    );
  }
}
