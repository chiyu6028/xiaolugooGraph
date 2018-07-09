package com.xiaolugoo.webapp.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xiaolugoo.webapp.service.FileService;
import com.xiaolugoo.webapp.util.ResultData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by chinaD on 2017/10/16.
 */
@Controller
@RequestMapping(value = "/file")
public class FileController {

    @Value("${download_path}")
    String download_path;

    @Value("${upload_path}")
    String upload_path;

    @Autowired
    FileService fileService;

    @Autowired
    ObjectMapper mapper;

    @RequestMapping(path = "/download", method = {RequestMethod.GET,RequestMethod.POST})
    public void downloadFile(@RequestParam("fileName") String fileName, HttpServletResponse response, HttpServletRequest request) {

        File file = new File(download_path, fileName);

        if (file.exists()) {
            response.setContentType("application/force-download");// 设置强制下载不打开
            response.addHeader("Content-Disposition", "attachment;fileName=" + fileName);// 设置文件名
            byte[] buffer = new byte[2048];

            FileInputStream fileInputStream = null;
            BufferedInputStream bufferedInputStream = null;
            OutputStream outputStream = null;

            try {

                fileInputStream = new FileInputStream(file);
                bufferedInputStream = new BufferedInputStream(fileInputStream);
                outputStream = response.getOutputStream();
                int i = bufferedInputStream.read(buffer);
                while (i != -1) {
                    outputStream.write(buffer, 0, i);
                    i = bufferedInputStream.read(buffer);
                }

            } catch (IOException e) {
                e.printStackTrace();
            } finally {

                if (fileInputStream != null) {
                    try {
                        fileInputStream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                if (bufferedInputStream != null) {
                    try {
                        bufferedInputStream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                if (outputStream != null) {
                    try {
                        outputStream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }

    }

    /**
     * spring mvc的上传方式
     * */
    @RequestMapping(value = "/upload", method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String upload(HttpServletRequest request, @RequestParam("file") MultipartFile file) throws JsonProcessingException {
        String fileName = file.getOriginalFilename();
        ResultData result = new ResultData();

        File path = new File(upload_path);
        if (!path.exists()) {
            path.mkdirs();
        }

        String uuid = UUID.randomUUID().toString().substring(0,8);

        DateFormat dfd = new SimpleDateFormat("yyyyMMddHHmmss");
        String fileKey = dfd.format(new Date())+"_"+uuid+"."+fileName.split("\\.")[1];

        // 保存
        File targetFile = new File(upload_path, fileKey);
        try {
            file.transferTo(targetFile);
        } catch (Exception e) {
            e.printStackTrace();
        }

        //将文件信息保存到数据库
        com.xiaolugoo.webapp.model.File myFile = new com.xiaolugoo.webapp.model.File();
        myFile.setFileKey(fileKey);
        myFile.setFileName(fileName);
        myFile.setFileStatus("1");
        myFile.setFileSize(file.getSize());
        myFile.setFilePath(upload_path);
        int flag = 0;

        flag = fileService.insert(myFile);


        if (flag > 0){
            result.setFlag("1");
            result.setMsg("上传成功！");
        }else if (flag == -1){
            result.setFlag("-1");
            result.setMsg("内容为空！");
        }else{
            result.setFlag("0");
            result.setMsg("上传失败！");
        }

        return mapper.writeValueAsString(result);
    }

    @RequestMapping(value = "/selectFileLast", method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public String selectFileLast() throws JsonProcessingException {
        ResultData result = new ResultData();
        List list = new ArrayList();
        list.add(result);
        int res = 0;
        com.xiaolugoo.webapp.model.File file = fileService.selectLastFile();
        if (file != null){
            result.setFlag("1");
            result.setMsg("查询成功");
            result.setResult(list);
        }else{
            result.setFlag("0");
            result.setMsg("查询失败");
        }
        return  mapper.writeValueAsString(result);
    }

}
