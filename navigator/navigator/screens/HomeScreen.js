import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function HomeScreen({ route, navigation }) {

function handleSettingsPress(){
  navigation.navigate("Settings")
}

function handleHappyPress(){
  navigation.navigate("Happy")
}

function handleSadPress(){
  navigation.navigate("Sad")
}



  return (
    <View style={styles.screen}>
      <Text>HOME SCREEN</Text>
      <Button 
      title="GO TO THE SETTINGS SCREEN" 
      onPress={handleSettingsPress}
      />
      <br/>
      <Button 
      title="GO TO THE HAPPY SCREEN" 
      onPress={handleHappyPress}
      />
      <br/>
      <Button 
      title="GO TO THE SAD SCREEN" 
      onPress={handleSadPress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});
