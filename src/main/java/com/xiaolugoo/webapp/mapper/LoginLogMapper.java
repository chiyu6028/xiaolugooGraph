package com.xiaolugoo.webapp.mapper;

import com.xiaolugoo.webapp.model.LoginLog;

import java.util.List;
import java.util.Map;

public interface LoginLogMapper {


    int insert(LoginLog record);

    List<LoginLog> selectLoginLog(Map map);


}