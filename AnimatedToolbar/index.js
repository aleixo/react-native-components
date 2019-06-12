import React from 'react';
import {
  View, StatusBar, Animated, StyleSheet, Dimensions, Image
} from 'react-native';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };

    this.toolbarAnimation = {
      toValue: props.toHeight,
      duration: props.fadeinDuration,
    }

    this.toolbarFadeoutAnimation = {
      toValue: 0,
      duration: props.fadeoutDuration,
    }
  }

  componentDidMount() {
    const { fadeout, fadeoutAfter } = this.props;
    Animated.timing(this.state.fadeAnim, this.toolbarAnimation).start(() => {
      fadeout && setTimeout(() => Animated.timing(this.state.fadeAnim, this.toolbarFadeoutAnimation).start(), fadeoutAfter)
    });
  }

  render() {
    const { fadeAnim } = this.state;
    const { image, backgroundColor } = this.props;
    return (
      <View style={{
        ...styles.toolbarContainer,
        width: Dimensions.get('window').width,
        backgroundColor,
      }}>
        <Animated.View style={{
          ...styles.topLogoContainer,
          width: Dimensions.get('window').width / 1.5,
          height: fadeAnim,
        }}
        >
          {image &&
            <Image
              resizeMode={FastImage.resizeMode.center}
              source={image}
              style={styles.logo}
            />}
        </Animated.View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  toolbarContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    width: Dimensions.get('window').width,
  },
  topLogoContainer: {
    height: StatusBar.currentHeight,
    width: Dimensions.get('window').width / 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
  }
})

export default Toolbar;