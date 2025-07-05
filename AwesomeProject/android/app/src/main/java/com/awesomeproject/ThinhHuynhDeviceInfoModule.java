package com.awesomeproject; // replace your-apps-package-name with your app’s package name
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

public class ThinhHuynhDeviceInfoModule extends ReactContextBaseJavaModule {
    ThinhHuynhDeviceInfoModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ThinhHuynhDeviceInfoModule";
    }

    @ReactMethod
    public void getDeviceInfo(Promise promise) {
        try {
            String model = Build.MODEL;
            String version = Build.VERSION.RELEASE;
            // Trả về một map chứa model và OS
            WritableMap map = Arguments.createMap();
            map.putString("model", model);
            map.putString("version", version);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }
}