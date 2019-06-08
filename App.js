import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Expandable from './Expandable';
import AnimatedNumber from './AnimatedNumber';
import Slider from './Slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Expandable

        data={[
          { title: 'Title1dasdsdfdsfdsfds', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
        ]}
        renderExpanded={(data) => <Text>{data.title} expanded</Text>}
        renderHeader={(data) => <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>}
      />

      <Expandable
        controlExpand
        data={[
          { title: '2 - Title1dasdsdfdsfdsfds', data: ['2item1', '2item2'] },
          { title: '2 - Title2', data: ['2item3', '2item4'] },
          { title: '2 - Title3', data: ['2item5', '2item6'] },
        ]}
        renderExpanded={(data) => <Text>{data.title} expanded</Text>}
        renderHeader={(data, toggleBody) =>
          <TouchableOpacity onPress={toggleBody}>
            <Text style={{ fontWeight: 'bold' }}>{data.title} - 2</Text>
          </TouchableOpacity>}
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
