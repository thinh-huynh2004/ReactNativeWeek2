import DeviceInfoModule from './NativeDeviceInfoModule';

// Optional: You can define wrapper functions if needed
export function getDeviceModel(): Promise<string> {
  return DeviceInfoModule.getDeviceModel();
}

export function getDeviceIpAddress(): Promise<string> {
  return DeviceInfoModule.getDeviceIpAddress();
}

export function getDeviceUptime(): Promise<string> {
  return DeviceInfoModule.getDeviceUptime();
}

export function getBatteryStatus(): Promise<string> {
  return DeviceInfoModule.getBatteryStatus();
}

export function getBatteryLevel(): Promise<string> {
  return DeviceInfoModule.getBatteryLevel();
}

export function getAndroidVersion(): Promise<string> {
  return DeviceInfoModule.getAndroidVersion();
}

// Export the whole module if needed
export default DeviceInfoModule;