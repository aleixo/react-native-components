import React from 'react';
import { FlatList } from 'react-native';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.currentIndex = 0;
  }

  componentWillUnmount() {
    clearInterval(this.autoPlayIntervalRef);
  }

  _startAutoplay = () => {
    const { autoplayInterval } = this.props;
    const autoplayHandler = () => {
      this.currentIndex = this._nextIndexLeft();
      this.listRef.scrollToIndex({ animated: true, index: this.currentIndex });
    };


    // this.autoPlayIntervalRef = setInterval(autoplayHandler, autoplayInterval);
  }

  _handleFLatListMount = (ref) => {
    const { autoplay } = this.props;

    if (!autoplay) {
      return;
    }
    this.listRef = ref;

    this._startAutoplay();
  }

  _nextIndexRight = () => {
    const { pages } = this.props;
    const nextObviousIndex = this.currentIndex - 1;
    return nextObviousIndex < 0 ? pages.length - 1 : nextObviousIndex;
  }

  _nextIndexLeft = () => {
    const { pages } = this.props;
    const nextObviousIndex = this.currentIndex + 1;
    return nextObviousIndex >= pages.length ? 0 : nextObviousIndex;
  }

  _listItem = ({ item }) => {
    const Component = item.component;
    return <Component />;
  }


  _handleScrollBegin = (event) => {
    clearInterval(this.autoPlayIntervalRef);

    this.scrollStartAt = event.nativeEvent.contentOffset.x;
  }

  _handleScrollEnd = (event) => {
    const scrollingLeft = event.nativeEvent.contentOffset.x > this.scrollStartAt;

    this.currentIndex = scrollingLeft ? this._nextIndexLeft() : this._nextIndexRight();
    this.listRef.scrollToIndex({ animated: true, index: this.currentIndex });
    this._startAutoplay();
  }

  render() {
    const { pages } = this.props;

    return (
      <FlatList
        horizontal
        ref={this._handleFLatListMount}
        data={pages}
        renderItem={this._listItem}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={this._handleScrollBegin}
        onScrollEndDrag={this._handleScrollEnd}
      />
    );
  }
}
