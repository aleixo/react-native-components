import React from 'react';
import PropTypes from 'prop-types';

import { SectionList, View, TouchableOpacity } from 'react-native';

class Expandable extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
      data: data.map(header => {
        const mapped = this.props.dataMapper ? this.props.dataMapper(header) : header;

        return {
          ...mapped,
          key: `${Math.random()}`,
          data: mapped.data.map(m => ({ ...m, key: `${Math.random()}` })),
        }
      })
    }
    this.listKey = `${Math.random()}`;
  }

  _toggleSection = (section) => {
    const { willToggle, __didToggle, namespace } = this.props;
    const { data } = this.state;
    willToggle();

    this.setState({
      data: data.map((item) => {
        if (item.key !== section.key) {
          return item;
        }

        return {
          ...item,
          expanded: !item.expanded
        };
      })
    }, __didToggle.bind(null, section, namespace));
  }

  collapseAll = () => {
    const { data } = this.state;
    this.setState({
      data: data.map((item) => {
        return {
          ...item,
          expanded: false
        };
      })
    });
  }

  collapseExcept = (section) => {
    const { data } = this.state;

    this.setState({
      data: data.map((item) => {
        if (item.key === section.key) {
          return item;
        }

        return {
          ...item,
          expanded: false
        };
      })
    });
  }

  render() {

    const {
      renderHeader, renderExpanded, renderCollapsed, controlExpand,
    } = this.props;
    const { data } = this.state;
    
    return (
      <SectionList
        sections={data}
        listKey={this.listKey}
        renderItem={({ item, section }) => section.expanded ? renderExpanded(item, section) : renderCollapsed(item, section)}
        renderSectionHeader={({ section }) => (controlExpand ? (
          renderHeader(section, this._toggleSection.bind(this, section))
        ) : (
            <TouchableOpacity onPress={() => this._toggleSection(section)}>
              {renderHeader(section)}
            </TouchableOpacity>
          ))}
      />
    );
  }
}

Expandable.propTypes = {
  controlExpand: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  __didToggle: PropTypes.func,
  willToggle: PropTypes.func,
  renderExpanded: PropTypes.func.isRequired,
  renderHeader: PropTypes.func.isRequired,
  renderCollapsed: PropTypes.func,
};

Expandable.defaultProps = {
  controlExpand: false,
  __didToggle: () => null,
  willToggle: () => null,
  renderCollapsed: () => null,
};

export default Expandable;
