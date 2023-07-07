import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from 'styled-components/native';

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #BF4F74;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
      <Text>KLAKAKAKALALAL</Text>
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
});
