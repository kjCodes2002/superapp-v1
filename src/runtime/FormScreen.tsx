import React from 'react';
import { View } from 'react-native';
import { Entity } from '../types/AppSchema';
import DynamicForm from './DynamicForm';

interface Props {
  entity: Entity;
  onSubmit: (data: Record<string, any>) => void;
}

export default function FormScreen({ entity, onSubmit }: Props) {
  return (
    <View>
      <DynamicForm fields={entity.fields} onSubmit={onSubmit} />
    </View>
  );
}