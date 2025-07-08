package com.nativegetdeviceinfo

import android.content.Context
import android.os.BatteryManager
import android.os.Build
import android.os.SystemClock
import android.net.wifi.WifiManager
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.text.format.Formatter
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.nativegetdeviceinfo.NativeGetDeviceInfoSpec

class NativeGetDeviceInfoModule(reactContext: ReactApplicationContext) : NativeGetDeviceInfoSpec(reactContext) {
    override fun getName() = NAME

    // Get device model
    override fun getDeviceModel(promise: Promise) {
        val manufacturer = Build.MANUFACTURER
        val model = Build.MODEL
        promise.resolve("$manufacturer $model")
    }

    override fun getDeviceIpAddress(promise: Promise) {
        try {
            val connectivityManager = getReactApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
            val network = connectivityManager.activeNetwork
            val networkCapabilities = connectivityManager.getNetworkCapabilities(network)

            val ipAddress = when {
                networkCapabilities?.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) == true -> {
                    val wifiManager = getReactApplicationContext().getSystemService(Context.WIFI_SERVICE) as WifiManager
                    val wifiInfo = wifiManager.connectionInfo
                    Formatter.formatIpAddress(wifiInfo.ipAddress)
                }
                networkCapabilities?.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) == true -> "Cellular network IP unavailable"
                else -> "Unknown"
            }
            promise.resolve(ipAddress)
        } catch (e: Exception) {
            promise.reject("IP_ERROR", "Unable to retrieve IP address: ${e.message}")
        }
    }

    override fun getDeviceUptime(promise: Promise) {
        val uptimeMillis = SystemClock.uptimeMillis() // Device uptime in milliseconds
        val uptimeSeconds = uptimeMillis / 1000
        val hours = uptimeSeconds / 3600
        val minutes = (uptimeSeconds % 3600) / 60
        val seconds = uptimeSeconds % 60
        promise.resolve("$hours hours, $minutes minutes, $seconds seconds")
    }

    override fun getBatteryStatus(promise: Promise) {
      try {
          val batteryManager = getReactApplicationContext().getSystemService(Context.BATTERY_SERVICE) as BatteryManager
          val isCharging = batteryManager.isCharging
          promise.resolve(if (isCharging) "Charging" else "Not Charging")
      } catch (e: Exception) {
          promise.reject("BATTERY_STATUS_ERROR", "Unable to retrieve battery status: ${e.message}")
      }
    }

    override fun getBatteryLevel(promise: Promise) {
        try {
            val batteryManager = getReactApplicationContext().getSystemService(Context.BATTERY_SERVICE) as BatteryManager
            val level = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
            promise.resolve("$level%")
        } catch (e: Exception) {
            promise.reject("BATTERY_LEVEL_ERROR", "Unable to retrieve battery level: ${e.message}")
        }
    }

    override fun getAndroidVersion(promise: Promise) {
      val androidVersion = Build.VERSION.RELEASE
      promise.resolve("Android $androidVersion")
    }

    companion object {
        const val NAME = "NativeGetDeviceInfo"
    }
}