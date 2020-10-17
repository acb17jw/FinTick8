package com.nativemodule

import android.content.Context
import com.facebook.react.bridge.*

import java.time.LocalDateTime

class SharedPrefModule constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

  override fun getName(): String {
    return "SharedPrefModule"
  }

  @ReactMethod
  fun getString(key: String, promise: Promise) {
    val sharedPref = currentActivity!!.getPreferences(Context.MODE_PRIVATE)
    val value = sharedPref.getString(key, "Hubercik")
    promise.resolve(value)
  }

  @ReactMethod
  fun initialse(key: String, value: String) {
    val sharedPref = currentActivity!!.getPreferences(Context.MODE_PRIVATE)
    val editor = sharedPref.edit()
    editor.putString(key, value)
    editor.apply()
  }

  @ReactMethod
  fun getNetflixDate(promise: Promise){
    promise.resolve(LocalDateTime.now())
  }

  @ReactMethod
  fun getAllDates(promise: Promise){
    var array = WritableNativeArray()

    array.pushString("2020-10-10 12:58:31")
    array.pushString("2020-10-08 14:33:13")
    array.pushString("2020-10-07 15:46:32")
    array.pushString("2020-10-05 22:51:33")

    promise.resolve(array)
  }
}