import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
  const [name, setName] = useState("noma")
  const [person, SetPerson] = useState({ name: 'noma', age: 20 });
  const [age, setAge] = useState('30');

  const clickHandler = () => {
    setName('Lilian');
    SetPerson({ name: name, age: age })
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'blue', marginBottom: 20 }}>Made by Noma</Text>
      <Text>Enter name:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />
      <Text>Enter age:</Text>
      <TextInput style={styles.input}
        placeholder='e.g. 99'
        onChangeText={(val) => setAge(val)}
        keyboardType='numeric' />
      <Text>My name is {name}</Text>
      <Text>I am {age} years old</Text>
      <Text> name: {person.name}, age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="UPDATE STATE" onPress={clickHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
