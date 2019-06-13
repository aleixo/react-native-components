import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.elementsRefs = []
  }

  _handleDidToggle = (obj) => {
    this.elementsRefs.forEach(ref => {
      ref._collapseAll()
      ref._expandOne(obj)
    })
  }

  render() {
    const { children } = this.props;
    if (Array.isArray(children)) {

      return children.map(Component => {
        const Elm = React.cloneElement(Component,
          {

            didToggle: this._handleDidToggle,
            ref: ref => this.elementsRefs = [...this.elementsRefs, ref],
          });

        return Elm
      })
    }
    return { ...children }
  }
}

export default Container;