import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AppSchema } from '../types/AppSchema';
import FormScreen from './FormScreen';
import ListScreen from './ListScreen';

interface Props {
  schema: AppSchema;
}

export default function RuntimeRenderer({ schema }: Props) {
  const [currentScreen, setCurrentScreen] = useState<'list' | 'form'>('list');
  const [records, setRecords] = useState<Record<string, any>[]>([]);

  const entity = schema.entities[0];

  function handleAdd(data: Record<string, any>) {
    setRecords(prev => [...prev, data]);
    setCurrentScreen('list');
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {schema.appName}
      </Text>

      {currentScreen === 'list' ? (
        <>
          <ListScreen records={records} />
          <Button title="Add New" onPress={() => setCurrentScreen('form')} />
        </>
      ) : (
        <FormScreen entity={entity} onSubmit={handleAdd} />
      )}
    </View>
  );
}