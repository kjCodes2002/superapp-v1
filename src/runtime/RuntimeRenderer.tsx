import React from 'react';
import { View, Text } from 'react-native';
import { AppSchema } from '../types/AppSchema';
import FormScreen from './FormScreen';

interface Props {
  schema: AppSchema;
}

export default function RuntimeRenderer({ schema }: Props) {
  const firstScreen = schema.screens[0];
  const entity = schema.entities.find(e => e.name === firstScreen.entity);

  if (!entity) {
    return <Text>Error: Entity not found</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 20 }}>
        {schema.appName}
      </Text>
      <FormScreen entity={entity} />
    </View>
  );
}