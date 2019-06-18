import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Expandable from './Expandable';
import AnimatedNumber from './AnimatedNumber';
import Slider from './Slider';
import Button from './Button';
import AnimatedToolbar from './AnimatedToolbar';
import AudioPlayer from './AudioPlayer';

const Others = () => (
  <View>
    <AnimatedToolbar
      backgroundColor='red'
      toHeight={100}
      fadeinDuration={1000}
      fadeoutAfter={10000}
      fadeoutDuration={1000}
      fadeout
    />

    <Button
      small
      applyTopBottomPaddings
      title="BUTTON"
      backgroundColor="red"
    />

    <AudioPlayer
      sound={require('./assets/audio.mp3')}
    />

    <View style={{ width: 100 }}>
      <Slider
        autoplay
        autoplayInterval={2000}
        pages={[
          {
            key: 'a',
            component: () => <View style={{ backgroundColor: 'pink', height: 20, width: 50 }}><Text>1</Text></View>
          }, {
            key: 'd',
            component: () => <View style={{ backgroundColor: 'red', height: 20, width: 50 }}><Text>2</Text></View>
          }, {
            key: 'v',
            component: () => <View style={{ backgroundColor: 'yellow', height: 20, width: 50 }}><Text>3</Text></View>
          }, {
            key: 'q',
            component: () => <View style={{ backgroundColor: 'blue', height: 20, width: 50 }}><Text>4</Text></View>
          }, {
            key: 'j',
            component: () => <View style={{ backgroundColor: 'pink', height: 20, width: 50 }}><Text>5</Text></View>
          }, {
            key: 'g',
            component: () => <View style={{ backgroundColor: 'red', height: 20, width: 50 }}><Text>6</Text></View>
          }, {
            key: 'nn',
            component: () => <View style={{ backgroundColor: 'yellow', height: 20, width: 50 }}><Text>7</Text></View>
          }, {
            key: 'mm',
            component: () => <View style={{ backgroundColor: 'blue', height: 20, width: 50 }}><Text>8</Text></View>
          }
        ]}
      />
    </View>
    <AnimatedNumber
      from={0}
      to={20}
      duration={3000}
    />
  </View>
)

export default function App() {
  return (
    <View style={styles.container}>

      <Expandable.Container
      >
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER</Text></View>}
          renderContent={() => <View><Text>CONTENT</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit"
          renderHeader={() => <View><Text>HEADER TO THE NESTED</Text></View>}
          renderContent={() => (
            <Expandable.Collapsible
              namespace="groupit3"
              renderHeader={() => <View><Text>HEADER NESTED</Text></View>}
              renderContent={() => <View><Text>CONTENT NESTED</Text></View>}
            />
          )}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
        <Expandable.Collapsible
          id={`${Math.random()}`}
          namespace="groupit2"
          renderHeader={() => <View><Text>HEADER3</Text></View>}
          renderContent={() => <View style={{ height: 200 }}><Text>CONTENT3</Text></View>}
        />
      </Expandable.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
