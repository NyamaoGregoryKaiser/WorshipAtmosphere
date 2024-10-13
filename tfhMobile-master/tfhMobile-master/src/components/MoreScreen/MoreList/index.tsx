import { View, FlatList } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import listItems from './listItems';
import MoreItem from '../MoreItem';

const MoreList = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  return (
    <>
      <FlatList
        data={listItems}
        renderItem={({ item }) => (
          <MoreItem
            icon={item.icon}
            title={item.title}
            type={item.type}
            screenName={item.screenName}
            navigateToScreen={navigateToScreen}
          />
        )}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={{ flex: 1 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#002F724D',
  },
});

export default MoreList;
