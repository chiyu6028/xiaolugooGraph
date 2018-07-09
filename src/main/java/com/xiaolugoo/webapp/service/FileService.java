package com.xiaolugoo.webapp.service;

import com.xiaolugoo.webapp.model.File;

/**
 * @Auther: ALEX
 * @Date: 2018/6/9 10:23
 * @Description:
 */
public interface FileService {

    int deleteByPrimaryKey(Integer fileId);

    int insert(File record);

    File selectByPrimaryKey(Integer fileId);

    File selectLastFile();
}
