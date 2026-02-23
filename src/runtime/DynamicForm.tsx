import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Field } from '../types/AppSchema';

interface Props {
  fields: Field[];
  onSubmit: (data: Record<string, any>) => void;
}

export default function DynamicForm({ fields, onSubmit }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  function handleChange(name: string, value: any) {
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <View>
      {fields.map(field => (
        <View key={field.name} style={{ marginBottom: 12 }}>
          <Text>{field.label}</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 8,
              borderRadius: 4,
            }}
            keyboardType={field.type === 'number' ? 'numeric' : 'default'}
            onChangeText={value => handleChange(field.name, value)}
          />
        </View>
      ))}

      <Button title="Submit" onPress={() => onSubmit(formData)} />
    </View>
  );
}