import React from 'react';

import Context from './context';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.expandablesActions = {}
  }

  _registerExpandableActions = (namespace, actions) => {
    if (!namespace) {
      return
    }
    this.expandablesActions = {
      ...this.expandablesActions,
      [namespace]: {
        ...this.expandablesActions[namespace],
        [`${Math.random()}`]: actions
      }
    };
  }

  _didToggle = (section, namespace) => {
    if (!namespace) {
      return
    }
    Object.keys(this.expandablesActions[namespace]).forEach(key => {
      this.expandablesActions[namespace][key].collapseExcept(section)
    })
  }

  _contextValue = () => ({
    registerExpandableActions: this._registerExpandableActions,
    __didToggle: this._didToggle,
  })

  render() {
    return (
      <Context.Provider value={this._contextValue()}>
        {this.props.children}
      </Context.Provider>
    )
  }
}