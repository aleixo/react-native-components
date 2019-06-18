import Container from './Container';
import withContext from './withContext';
import PureCollapsible from './Collapsible';

const Collapsible = withContext(PureCollapsible);

export {
  Collapsible,
  Container,
  withContext,
}