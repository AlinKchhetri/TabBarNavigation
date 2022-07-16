import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.WelcomeText}>
      <Text style={styles.WelcomeTitle}>Welcom Back</Text>
      <Text style={styles.NameTitle}>Alin</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  WelcomeText: {
    position: 'absolute',
    top: 20,
    left: 8,
  },
  WelcomeTitle: {
    fontSize: 20,
    color: '#000'
  },
  NameTitle: {
    fontSize: 15,
    color: '#000'

  }
})

export default Home