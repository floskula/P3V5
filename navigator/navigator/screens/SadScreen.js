import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function SadScreen({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

function handleSettingsPress(){
  navigation.navigate("Settings")
}

function handleHappyPress(){
  navigation.navigate("Happy")
}

return (
  <View style={styles.screen}>
      <Text>SAD SCREEN</Text>
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
      title="GO TO THE HAPPY SCREEN"
      onPress={handleHappyPress}
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
