package com.example.cxp.webdemo;

import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.util.Log;
public class MyWebChromeClient extends WebChromeClient {
    @Override
    public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
        //return super.onJsAlert(view, url, message, result);
        Log.v("test", message);
        result.confirm();
        return true;
    }
}
