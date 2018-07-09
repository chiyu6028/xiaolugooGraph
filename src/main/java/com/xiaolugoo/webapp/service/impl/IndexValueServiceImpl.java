package com.xiaolugoo.webapp.service.impl;

import com.xiaolugoo.webapp.mapper.IndexValueMapper;
import com.xiaolugoo.webapp.service.IndexValueService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/6/9 18:08
 * @Description:
 */
@Service
public class IndexValueServiceImpl implements IndexValueService {

    Logger logger = LoggerFactory.getLogger(IndexValueServiceImpl.class);

    @Autowired
    IndexValueMapper indexValueMapper;

    @Override
    public List<Map<String,Object>> findIndexValue(Map map) {
        List<Map<String,Object>> dateList = indexValueMapper.findDate();
        logger.debug(dateList.toString());
        map.put("dateList",dateList);
        return indexValueMapper.findIndexValue(map);
    }
}
