import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';

const { ThinhHuynhDeviceInfoModule } = NativeModules;

export default function Detail() {
  const [info, setInfo] = useState(null);

  const fetchDeviceInfo = async () => {
    try {
      const result = await ThinhHuynhDeviceInfoModule.getDeviceInfo();
      setInfo(result);
    } catch (err) {
      console.error("Error fetching device info:", err);
    }
  };

  const [display, setDisplay] = useState(false)

  const clickToSetDisplay = () => {
    setDisplay(display => !display)
  }

  

  return (
    <View style={styles.container}>
      <Button title="Lấy thông tin thiết bị" onPress={fetchDeviceInfo} />
      {info && (
        <View style={styles.infoBox}>
          <Text style={styles.text}>Model: {info.model}</Text>
          <Text style={styles.text}>Android Version: {info.version}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
});