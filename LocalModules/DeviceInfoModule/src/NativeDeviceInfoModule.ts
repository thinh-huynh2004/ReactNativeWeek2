import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';
export interface Spec extends TurboModule {
  getDeviceModel(): Promise<string>;
  getDeviceIpAddress(): Promise<string>;
  getDeviceUptime(): Promise<string>;
  getBatteryStatus(): Promise<string>;
  getBatteryLevel(): Promise<string>;
  getAndroidVersion(): Promise<string>;
}
export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeGetDeviceInfo',
);