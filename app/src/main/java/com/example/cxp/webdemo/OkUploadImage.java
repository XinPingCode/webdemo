package com.example.cxp.webdemo;
import android.util.Log;

import java.io.File;
import java.io.IOException;

import okhttp3.Call;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class OkUploadImage {
//    public  static void upload(String picturePath) {
//
//    }
    public static void imageUpLoad(String localPath) {
        MediaType MEDIA_TYPE_PNG = MediaType.parse("image/png");
        OkHttpClient client = new OkHttpClient();
        MultipartBody.Builder builder = new MultipartBody.Builder().setType(MultipartBody.FORM);
        File f = new File(localPath);
        builder.addFormDataPart("userID","123");
        builder.addFormDataPart("file", f.getName(), RequestBody.create(MEDIA_TYPE_PNG, f));
        final MultipartBody requestBody = builder.build();
        //构建请求
        final Request request = new Request.Builder()
                .url("http://  ")//地址
                .post(requestBody)//添加请求体
                .build();
        client.newCall(request).enqueue(new okhttp3.Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                Log.v("onFailure",""+e.getLocalizedMessage());
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                Log.v("onResponse","onResponse");
            }
        });
    }
}


