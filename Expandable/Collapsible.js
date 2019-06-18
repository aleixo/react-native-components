import React from 'react';

import { View, TouchableOpacity, } from 'react-native';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    }
  }

  _toggle = (event) => {
    this.props.__willToggle(this.props.namespace, this.props.id, this.state.expand)
    this.setState({ expand: !this.state.expand },
      () => this.props.__didToggle(this.state.expand, this.props.id))
  }

  collapse = () => {
    this.setState({
      expand: false,
    })
  }

  render() {
    const { renderHeader, renderContent } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this._toggle}>
          {renderHeader()}
        </TouchableOpacity>
        {this.state.expand && <View>
          {renderContent()}
        </View>}
      </View>
    )
  }
}

export default Collapsible;