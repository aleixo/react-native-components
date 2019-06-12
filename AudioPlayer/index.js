import React from 'react';

import { View, Animated } from 'react-native';

import Button from '../Button'

import { Howl, Howler } from 'howler';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.sound = props.sound
    this.howlerSound = this._initSound(this.sound);

    this.progressWidth = 200;
    this.progressStatusWidth = 10;

    this.state = {
      progressAnim: new Animated.Value(0),
    }

    this.howlerSound.on('load', () => {
      this.toolbarFadeoutAnimation = {
        toValue: this.progressWidth,
        duration: this.howlerSound.duration() * 1000,
        useNativeDriver: true
      }
    })

    this.howlerSound.on('play', () => {
      Animated.timing(this.state.progressAnim, this.toolbarFadeoutAnimation).start()

    })

    this.howlerSound.on('pause', () => {
      this.state.progressAnim.stopAnimation(value => {
        this.setState({
          progressAnim: new Animated.value(value)
        })
      })
    })

    this.howlerSound.on('stop', () => {
      Animated.timing(this.state.progressAnim, {
        toValue: 0,
        duration: 1,
        useNativeDriver: true
      }).start()
    })
  }

  _initSound = () => new Howl({ src: [this.sound] })

  _play = () => this.howlerSound.play();

  _pause = () => this.howlerSound.pause();

  _stop = () => this.howlerSound.stop();

  render() {
    const { progressAnim } = this.state;

    return (
      <View>
        <Button
          small
          applyTopBottomPaddings
          title="Play"
          backgroundColor="red"
          onPress={this._play}
        />
        <Button
          small
          applyTopBottomPaddings
          title="Pause"
          backgroundColor="blue"
          onPress={this._pause}
        />

        <Button
          small
          applyTopBottomPaddings
          title="Stop"
          backgroundColor="pink"
          onPress={this._stop}
        />

        <View style={{ marginTop: 20, justifyContent: 'center' }}>
          <View
            style={{
              width: this.progressWidth,
              height: 20,
              backgroundColor: "blue"
            }}
          />
          <Animated.View style={{

            position: "absolute",
            width: this.progressStatusWidth,
            height: 30,
            left: progressAnim,
            backgroundColor: 'red'
          }} />
        </View>

      </View>
    )
  }
}
