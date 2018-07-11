package com.xiaolugoo.webapp.service.impl;

import com.xiaolugoo.webapp.mapper.FileMapper;
import com.xiaolugoo.webapp.mapper.IndexValueMapper;
import com.xiaolugoo.webapp.model.File;
import com.xiaolugoo.webapp.model.IndexValue;
import com.xiaolugoo.webapp.service.FileService;
import com.xiaolugoo.webapp.util.ExcelReadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 * @Auther: ALEX
 * @Date: 2018/6/9 10:23
 * @Description:
 */
@Service
public class FileServiceImpl implements FileService {

    @Autowired
    FileMapper fileMapper;

    @Autowired
    IndexValueMapper indexValueMapper;

    ExcelReadUtil readUtil = ExcelReadUtil.getinstance();

    @Override
    public int deleteByPrimaryKey(Integer fileId) {
        return fileMapper.deleteByPrimaryKey(fileId);
    }

    @Override
    public int insert(File record) {
        //存储文件信息
        int flag = fileMapper.insert(record);
        //存储文件内容
        List<IndexValue> fileList = getContent(record.getFilePath(),record.getFileKey());

        if(fileList.size() == 0){
            return -1;
        }

        int row = (int) Math.ceil((double)fileList.size()/1000);

        for (int i = 0; i < row; i++) {
            List<IndexValue> batchFileList = new ArrayList<>();
            for (int j=i*1000; j<fileList.size(); j++){
                IndexValue indexValue = fileList.get(j);
                if (indexValue != null){
                    batchFileList.add(indexValue);
                }
                int b = (i+1)*1000 < fileList.size() ? (i+1)*1000-1 : fileList.size()-1;
                if (j == b){
                    break;
                }
            }
            //先删除已存在的
            int de = indexValueMapper.deleteExcel(batchFileList);
        }

        //在插入新增的
        int po = indexValueMapper.insertExcel(fileList);

        return flag < po ? flag : po;
    }

    @Override
    public File selectByPrimaryKey(Integer fileId) {
        return fileMapper.selectByPrimaryKey(fileId);
    }

    //读取文件内容
    public List<IndexValue> getContent(String path, String fileKey){
        List<IndexValue> filesList = null;
        try {
            filesList = readUtil.read(path,fileKey);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return filesList;
    }

    public File selectLastFile(){
        return fileMapper.selectLastFile();
    };

}
