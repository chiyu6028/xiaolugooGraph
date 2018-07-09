package com.xiaolugoo.webapp.mapper;

import com.xiaolugoo.webapp.model.Index;

import java.util.List;
import java.util.Map;

public interface IndexMapper {

    List<Index> findIndex(Map map);
}