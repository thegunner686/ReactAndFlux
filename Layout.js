let React = require("react");

import Number from "./Number";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "gunner",
    };
  }

  componentDidMount() {
    setInterval(() => {
      if(this.state.name == "gunner") {
        this.setState({
          name: "fred",
        });
      } else {
        this.setState({
          name: "gunner"
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.name}
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
        <Number/>
      </div>
    );
  }
}
