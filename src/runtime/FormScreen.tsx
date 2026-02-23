import React from 'react';
import { View, Alert } from 'react-native';
import { Entity } from '../types/AppSchema';
import DynamicForm from './DynamicForm';

interface Props {
  entity: Entity;
}

export default function FormScreen({ entity }: Props) {
  function handleSubmit(data: Record<string, any>) {
    Alert.alert('Form Submitted', JSON.stringify(data, null, 2));
  }

  return (
    <View style={{ padding: 20 }}>
      <DynamicForm fields={entity.fields} onSubmit={handleSubmit} />
    </View>
  );
}