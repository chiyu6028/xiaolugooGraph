package com.xiaolugoo.webapp.service.impl;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.xiaolugoo.webapp.mapper.UserMapper;
import com.xiaolugoo.webapp.model.User;
import com.xiaolugoo.webapp.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/5/5 17:29
 * @Description:
 */

@Service
public class UserServiceImpl implements UserService {

    Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    UserMapper userMapper;


    @Override
    public int insert(User record) {
        int res = userMapper.insert(record);
        return 0;
    }

    @Override
    public User selectByPrimaryKey(Integer userId) {
        return userMapper.selectByPrimaryKey(userId);
    }

    @Override
    public User userLogin(String userAccount, String userPassword) {
        Map map = new HashMap();
        map.put("userAccount",userAccount);
        map.put("userPassword",userPassword);
        return  userMapper.userLogin(map);
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return userMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    @JsonIgnoreProperties(ignoreUnknown = true)
    public int emailValidate(String code) {
        return 0;
    }
}
