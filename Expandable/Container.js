import React from 'react';
import { FlatList, View } from 'react-native';
import Context from './context';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.scrollPosition = 0;
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

  _willToggle = (namespace) => {
    if (!namespace) {
      return
    }

    Object.keys(this.expandablesActions[namespace]).forEach(key => {
      this.expandablesActions[namespace]
        && this.expandablesActions[namespace][key]
        && this.expandablesActions[namespace][key].collapse()
    })
  }

  _didToggle = (expanded, id) => {
    this.expandendId = expanded ? id : this.expandendId;
    let scrollToId = null;

    this.props.children.forEach((child, index) => {

      if (child.props.id === id) {
        scrollToId = index;
      }
    })
    this.scrollToId = scrollToId;
    if (!scrollToId) {
      return;
    }
    //this.listReference.scrollToIndex({ animated: true, index: this.scrollToId, viewPosition: 0.5 })
  }

  _contextValue = () => ({
    registerExpandableActions: this._registerExpandableActions,
    __willToggle: this._willToggle,
    __didToggle: this._didToggle,
  })

  _storeReference = ref => {
    this.listReference = ref
  }

  render() {
    return (
      <Context.Provider value={this._contextValue()}>
        <FlatList
          ref={this._storeReference}
          data={this.props.children}
          renderItem={child => child.item}
          keyExtractor={(item, index) => item + index}
          onContentSizeChange={() => {

          }}

        />
      </Context.Provider >
    )
  }
}