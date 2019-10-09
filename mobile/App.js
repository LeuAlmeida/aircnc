import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Warning: Failed prop type:',
  'Warning: State updates from the useState()'
]);

export default function App() {
  return <Routes />
}