import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function HappyScreen({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

function handleSettingsPress(){
  navigation.navigate("Settings")
}

function handleSadPress(){
  navigation.navigate("Sad")
}

return (
  <View style={styles.screen}>
      <Text>HAPPY SCREEN</Text>
      <Button 
      title="GO TO THE HOME SCREEN"
      onPress={handleHomePress}
       />
      <br/>
      <Button 
      title="GO TO THE SETTINGS SCREEN"
      onPress={handleSettingsPress}
       />
      <br/>
      <Button 
      title="GO TO THE SAD SCREEN"
      onPress={handleSadPress}
       />
      <br/>
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
