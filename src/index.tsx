import React from "react";
import PropTypes from "prop-types";

interface State {}
interface Props {
  name: string;
}
export default class HelloButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps = {
    name: "World"
  };
  render() {
    return (
      <div>
        <button style={{ fontSize: "200%", backgroundColor: "red" }}>
          Hello {this.props.name}!
        </button>
      </div>
    );
  }
}
