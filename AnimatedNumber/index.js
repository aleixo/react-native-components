import React from 'react';

import { Text, View } from 'react-native';

export default class AnimatedNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.from,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, this._intervalDuration());

    setTimeout(() => {
      clearInterval(this.interval);
      this.setState({ number: this.props.to });
    }, this.props.duration);
  }

  _intervalDuration = () => this.props.duration / this.props.to;

  render() {
    const { number } = this.state;
    return (
      <View>
        <Text style={this.props.numberStyle || {
          fontSize: 20,
        }}
        >
          {number}

        </Text>
      </View>
    );
  }
}
