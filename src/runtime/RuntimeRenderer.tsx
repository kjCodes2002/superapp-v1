import React from 'react';
import { View, Text } from 'react-native';
import { AppSchema } from '../types/AppSchema';

interface Props {
    schema: AppSchema;
}

export default function RuntimeRenderer({schema}: Props) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {schema.appName}
      </Text>
      <Text>Runtime Loaded Successfully</Text>
    </View>
    )
}
