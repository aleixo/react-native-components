import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expandable from './Expandable';

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
        renderHeader={(data, toggleBody) => <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
