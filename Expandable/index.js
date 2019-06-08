import React from 'react';
import PropTypes from 'prop-types';

import { SectionList, View, TouchableOpacity } from 'react-native';

class Expandable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.data.map(item => ({ ...item, key: `${Math.random()}` })) };
  }

  componentDidMount() {
    this.props.didMount();
  }

  _toggleSection = (section) => {
    this.props.willToggle();
    console.log('toggle')
    this.setState({
      data: this.state.data.map(item => {
        if (item.key !== section.key) {
          return item;
        }

        return {
          ...item,
          expanded: !item.expanded
        }
      })
    }, this.props.didToggle);
  }
  render() {
    return (
      <SectionList
        renderItem={({ section }) => section.expanded ? this.props.renderExpanded(section) : this.props.renderCollapsed(section)}
        renderSectionHeader={({ section }) => this.props.controlExpand ? (
          <View
            style={{
              flex: 1, backgroundColor: 'red'
            }}
          >
            {this.props.renderHeader(section, this._toggleSection.bind(this, section))}
          </View>
        ) : (
            <TouchableOpacity
              style={{
                flex: 1, backgroundColor: 'red'
              }}
              onPress={() => this._toggleSection(section)}
            >
              {this.props.renderHeader(section)}
            </TouchableOpacity>
          )}
        sections={this.state.data}
        keyExtractor={(item, index) => item + index}
      />
    )
  }
}

Expandable.propTypes = {
  controlExpand: PropTypes.bool,
  data: PropTypes.array.isRequired,
  didMount: PropTypes.func,
  didToggle: PropTypes.func,
  willToggle: PropTypes.func,
  renderExpanded: PropTypes.func.isRequired,
  renderHeader: PropTypes.func.isRequired,
  renderCollapsed: PropTypes.func,
}

Expandable.defaultProps = {
  controlExpand: false,
  didMount: () => null,
  didToggle: () => null,
  willToggle: () => null,
  renderCollapsed: () => null,
}

export default Expandable;