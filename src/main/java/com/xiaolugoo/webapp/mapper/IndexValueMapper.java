package com.xiaolugoo.webapp.mapper;

import com.xiaolugoo.webapp.model.IndexValue;

import java.util.List;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/6/9 17:46
 * @Description:
 */
public interface IndexValueMapper {

    int deleteExcel(List<IndexValue> fileValues);

    int insertExcel(List<IndexValue> fileValues);

    List findDate();

    List<Map<String,Object>> findIndexValue(Map map);
}
