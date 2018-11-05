package com.example.cxp.webdemo;
import android.util.Log;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
public class UploadMethod {
    //private final int UP_PORT = 56;
    private final int UP_PORT = 21;
    private final int DOWN_PORT = 65;
    private final String USERNAME = "test";
    private final String PASSWORD = "1223";
    private final String ADRESS = "192.168.2.74";
    private FutureTask<Boolean> uploadTask;
    public UploadMethod(){}
    private boolean uploadFile(String hostname, int port, String username,String password, String folder, String filename, InputStream input) {
        boolean success = false;
        FTPClient ftp = new FTPClient();
        try {
            int reply;
            ftp.connect(hostname, port);// 连接FTP服务器
            // 如果采用默认端口，可以使用ftp.connect(url)的方式直接连接FTP服务器
            ftp.login(username, password);//登录
            reply = ftp.getReplyCode();
            if (!FTPReply.isPositiveCompletion(reply)){
                ftp.disconnect();
                return success;
            }
            //不加这一句上传后图片会显示损坏
            ftp.setFileType(FTP.BINARY_FILE_TYPE);
            ftp.changeWorkingDirectory(folder);

            //设置成其他端口的时候要添加这句话
            ftp.enterLocalPassiveMode();
            ftp.storeFile(filename, input);
            input.close();
            ftp.logout();
            success = true;
        }catch (IOException e) {
            e.printStackTrace();
        }finally{
            if (ftp.isConnected()) {
                try {
                    ftp.disconnect();
                }catch (IOException ioe){}

            }
        }

        return success;
    }
    public boolean upLoading(String filePath, final String folder, final String filename) {
        try {
            final FileInputStream in = new FileInputStream(filePath);
            //TODO ftp的连接方式用户名 密码等信息
            Callable<Boolean> callable = new Callable<Boolean>(){
                @Override
                public Boolean call() throws Exception {
                    if (!Thread.currentThread().isInterrupted()){
                        return uploadFile(ADRESS, UP_PORT, USERNAME, PASSWORD, folder,filename, in);
                    }
                    //正常地终止也返回true
                    return true;
                }
            };
            uploadTask = new FutureTask<Boolean>(callable);
            new Thread(uploadTask).start();
            //图片上传超过10s则超时,此方法会等待任务结束（正常完成，取消和异常等）
            return uploadTask.get(10000, TimeUnit.MILLISECONDS);
        }catch (FileNotFoundException e){
            e.printStackTrace();
        }catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }catch (TimeoutException e) {
            e.printStackTrace();
            Log.w("UploadMethod:", "上传时间超过10s");
        }
        return false;
    }
    public void cancelUpload(){
        if (uploadTask.cancel(true)){
            Log.i("UploadMethod：", "取消上传成功");
        }else {
            Log.i("UploadMethod：", "取消上传失败");
        }
    }

}
