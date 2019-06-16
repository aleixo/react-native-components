import React from 'react';
import ExpandableContext from './context';

export default WrappedComponent => props => (
  <ExpandableContext.Consumer>
    {context => {
      return (<WrappedComponent ref={ref => {
        context.registerExpandableActions(props.namespace, {
          collapseExcept: ref.collapseExcept,
        })
      }} {...context} {...props} />)
    }}
  </ExpandableContext.Consumer>
);
