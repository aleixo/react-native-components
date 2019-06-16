import PureElement from './Element';
import Container from './Container';
import withContext from './withContext';

const Element = withContext(PureElement);

export {
  PureElement,
  Element,
  Container,
  withContext,
}