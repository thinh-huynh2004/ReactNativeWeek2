import { NativeModules } from 'react-native';
const { DeviceInfo } = NativeModules;

export default {
  async getInfo() {
    return await DeviceInfo.getDeviceInfo();
  }
};