import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import DeviceInfoModule from 'device-info-module';


export default function App() {
  const [value, setValue] = useState<string | null>('');
  const getBatteryLevel = async () => {
    const data = await DeviceInfoModule?.getBatteryLevel();
    setValue(data ?? '');
  };
  const getDeviceModel = async () => {
    const data = await DeviceInfoModule?.getDeviceModel();
    setValue(data ?? '');
  };
  const getDeviceIpAddress = async () => {
    const data = await DeviceInfoModule?.getDeviceIpAddress();
    setValue(data ?? '');
  };
  const getDeviceUptime = async () => {
    const data = await DeviceInfoModule?.getDeviceUptime();
    setValue(data ?? '');
  };
  const getAndroidVersion = async () => {
    const data = await DeviceInfoModule?.getAndroidVersion();
    setValue(data ?? '');
  };
  useEffect(() => {
    getBatteryLevel();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{value}</Text>
      <View style={styles.buttonContainer}>
        <Button title={'Check Battery Level'} onPress={getBatteryLevel} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Check Device Model'} onPress={getDeviceModel} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Check Device Up time'} onPress={getDeviceUptime} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Check Android Version'} onPress={getAndroidVersion} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  taskTitle: { fontSize: 18 },
  buttonContainer: {marginBottom: 20}
});
