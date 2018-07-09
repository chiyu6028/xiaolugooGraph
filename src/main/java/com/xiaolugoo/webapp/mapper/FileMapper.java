package com.xiaolugoo.webapp.mapper;

import com.xiaolugoo.webapp.model.File;

public interface FileMapper {
    int deleteByPrimaryKey(Integer fileId);

    int insert(File record);

    File selectByPrimaryKey(Integer fileId);

    File selectLastFile();

}