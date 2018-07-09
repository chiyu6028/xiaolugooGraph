package com.xiaolugoo.webapp.service.impl;

import com.xiaolugoo.webapp.mapper.IndexMapper;
import com.xiaolugoo.webapp.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/6/10 11:20
 * @Description:
 */
@Service
public class IndexServiceImpl implements IndexService {

    @Autowired
    IndexMapper indexMapper;

    public List findIndex(Map map){
        return indexMapper.findIndex(map);
    }
}
