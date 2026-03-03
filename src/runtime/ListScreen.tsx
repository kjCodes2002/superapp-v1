import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Props {
  records: Record<string, any>[];
}

export default function ListScreen({ records }: Props) {
  if (records.length === 0) {
    return <Text>No records yet</Text>;
  }

  return (
    <FlatList
      data={records}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            marginBottom: 8,
          }}
        >
          {Object.entries(item).map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
      )}
    />
  );
}