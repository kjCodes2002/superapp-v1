import React from 'react';
import { View, Text, Button } from 'react-native';
import RuntimeRenderer from '../runtime/RuntimeRenderer';
import { demoApp } from '../data/demoApp';

export default function HomeScreen() {
    const [loaded, setLoaded] = React.useState(false);
    
    if(loaded) {
        return <RuntimeRenderer schema={demoApp} />;
    }
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SuperAPP</Text>
      <Button title="Load Demo App" onPress={() => setLoaded(true)} />
    </View>
  );
}