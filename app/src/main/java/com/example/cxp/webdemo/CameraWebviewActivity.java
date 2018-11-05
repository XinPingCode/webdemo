package com.example.cxp.webdemo;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.provider.MediaStore;
import android.support.v4.content.FileProvider;
import android.text.TextUtils;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.Toast;

import java.io.File;

public class CameraWebviewActivity extends Activity {
    private final static String TAG = "CameraWebviewActivity";
    private Button bt;
    private Button path;
    private Button ok;
    private Button rr;
    private Button ww;
    private WebView wv;
    public String fileFullName;//照相后的照片的全整路径
    private boolean fromTakePhoto; //是否是从摄像界面返回的webview
    final Handler mHandler = new Handler();
    public String allPath="test";
    public String allName="name.jpg";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera_webview);
        initViews();

    }
    @SuppressLint("JavascriptInterface")
    private void initViews() {
        bt = (Button) findViewById(R.id.bt);
        bt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                allName=Math.random()*1000+1 + ".jpg";
                takePhoto(allName);
                //takePhoto( Math.random()*1000+1 + ".jpg");
                                          }
        });
        path = (Button) findViewById(R.id.path);
        path.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showPath();
            }
        });
        ok = (Button) findViewById(R.id.ok);
        ok.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                okUpload();
            }
        });
        rr = (Button) findViewById(R.id.rr);
        ww = (Button) findViewById(R.id.ww);
        rr.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                getLocalStorageUserKey();
            }
        } );
        ww.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                w2("456");
            }
        } );
        wv = (WebView) findViewById(R.id.wv);
        WebSettings setting = wv.getSettings();
        setting.setJavaScriptEnabled(true);
        wv.setWebContentsDebuggingEnabled(true);
        wv.getSettings().setDomStorageEnabled(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN){
            wv.getSettings().setAllowUniversalAccessFromFileURLs(true);
        }

        wv.setWebViewClient(new WebViewClient(){
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
            }
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                //return super.shouldOverrideUrlLoading(view, url);
                view.loadUrl(url);
                return true;
            }
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
            }
        });
        //wv.setWebChromeClient(new MyWebChromeClient());
        wv.loadUrl("file:////android_asset/index.html");

        //webview增加javascript接口，监听html页面中的js点击事件





//        wv.addJavascriptInterface(new Object(){
//
//            public String clickOnAndroid(){
//                mHandler.post(new Runnable() {
//                    @Override
//                    public void run() {
//                        fromTakePhoto  = true;
//                        //调用 启用摄像头的自定义方法
//                        takePhoto("testimg" + Math.random()*1000+1 + ".jpg");
//                        Log.v("fileFullName" ,fileFullName);
//                    }
//                });
//                return fileFullName;
//            }
//        },"demo");
        wv.addJavascriptInterface(new JsInterface(this), "demo");

    }

    private class JsInterface {

        private Context mContext;
        public JsInterface(Context context) {
            this.mContext = context;
            //在js中调用window.demo.clickOnAndroid()，便会触发此方法。
        }
            @JavascriptInterface
            public String clickOnAndroid(){
                mHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        fromTakePhoto  = true;
                        //调用 启用摄像头的自定义方法
                        //takePhoto("testimg" + Math.random()*1000+1 + ".jpg");
                        allName=Math.random()*1000+1 + ".jpg";
                        takePhoto(allName);
                        Log.v("fileFullName" ,fileFullName);
                        allPath=fileFullName;
                    }
                });
                return fileFullName;
            }
        @JavascriptInterface
        public void getUserKey(String userKey){
            Log.v("WebViewFragment","读取到userKey : " + userKey);
            //已经拿到值，进行相关操作

            Toast toast=Toast.makeText(getApplicationContext(), "读取到userKey : " + userKey, Toast.LENGTH_SHORT);
        }
        @JavascriptInterface
        public void setUserKey(){
            String userKey = "123";
            String jsUrl = "javascript:(function({ var localStorage = window.localStorage; localStorage.setItem('userKey','" + userKey + "')})()";
            wv.loadUrl(jsUrl);
            wv.reload();
        }
        }


    /*
     * 调用摄像头的方法
     */
    public void takePhoto(String filename) {
        Log.v("test2","----start to take photo2 ----");
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        intent.putExtra(MediaStore.EXTRA_MEDIA_TITLE, "TakePhoto");
        //判断是否有SD卡
        String sdDir = null;
        boolean isSDcardExist = Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED);
        if(isSDcardExist) {
            sdDir = Environment.getExternalStorageDirectory().getAbsolutePath();
        }else {
            sdDir = Environment.getRootDirectory().getAbsolutePath();
        }
        //确定相片保存路径
        String targetDir = sdDir + "/" + "webview_camera";
        File file = new File(targetDir);
        if (!file.exists()) {
            file.mkdirs();
        }
        fileFullName = targetDir + "/" + filename;
        Log.v("fileFullName2" ,fileFullName);
        //初始化并调用摄像头
        intent.putExtra(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
        //判断是否是AndroidN以及更高的版本
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            //intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            File outputFile = new File(fileFullName);
            if (!outputFile.getParentFile().exists()) {
                outputFile.getParentFile().mkdir();
            }
            Uri contentUri = FileProvider.getUriForFile(this, BuildConfig.APPLICATION_ID + ".fileProvider", outputFile);
            intent.putExtra(MediaStore.EXTRA_OUTPUT, contentUri);
        }else {
            intent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(new File(fileFullName)));
        }

        startActivityForResult(intent, 1);
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.v("requestCode" ,requestCode+"");
        Log.v("resultCode" ,resultCode+"");
        //String name = data.getStringExtra("fileFullName");
        Log.v("fileFullName3" ,fileFullName+"");
        if (fromTakePhoto && requestCode ==1 && resultCode ==-1) {
            w2(fileFullName);
            wv.loadUrl("javascript:wave2('" + fileFullName + "')");
        }else {
            wv.loadUrl("javascript:wave2('Please take your photo')");
        }
        fromTakePhoto = false;
        super.onActivityResult(requestCode, resultCode, data);
    }
public void showPath(){
        if(allPath=="test"){
            Log.v("allPathnull",allPath);
        }else {
            Log.v("allPath",allPath);
            UploadMethod upload = new UploadMethod();
            //upload.upLoading(图片文件路径, ftp上保存的目录路径,  上传后的文件名);
            upload.upLoading(allPath, "./tes", allName);
        }
}
public  void okUpload(){
    if(allPath=="test"){
        Log.v("allPathnull",allPath);
    }else {
        Log.v("allPath",allPath);
       OkUploadImage.imageUpLoad(allPath);
    }
}
    private void getLocalStorageUserKey() {
        wv.loadUrl("javascript:(function(){ var localStorage = window.localStorage; window.demo.getUserKey(localStorage.getItem('userKey'))})()");
    }
    public void w2(String userKey){
        //String userKey = "123";
        String userKe="abc";
        String js = "window.localStorage.setItem('userKey','" + userKey + "');";
        String jsUrl = "javascript:(function(){ var localStorage = window.localStorage; localStorage.setItem('userKey','" + userKe + "')})()";
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
//            wv.evaluateJavascript(js, null);
//        } else {
//            wv.loadUrl(jsUrl);
//            wv.reload();
//        }
        wv.loadUrl(jsUrl);
        //wv.reload();
    }
}
