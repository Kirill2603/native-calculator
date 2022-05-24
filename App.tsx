import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Switch} from 'react-native';
import {useState} from "react";
import {ThemeContext} from "./src/context/themeComtext";
import {Colors} from "./src/styles/colors";
import {MyKeyboard} from './src/components/keyboard'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'}/>
        <Switch
          value={theme === 'light'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
