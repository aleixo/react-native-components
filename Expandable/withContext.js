import React from 'react';
import ExpandableContext from './context';

export default WrappedComponent => props => (
  <ExpandableContext.Consumer>
    {context => {
      return (<WrappedComponent
        ref={ref => {
          if (!ref) {
            return;
          }
          context.registerExpandableActions(props.namespace, {
            collapse: ref.collapse,
          })
        }}
        {...context}
        {...props}
      />)
    }}
  </ExpandableContext.Consumer>
);
