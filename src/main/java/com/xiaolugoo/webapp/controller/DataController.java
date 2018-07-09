package com.xiaolugoo.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/6/30 21:21
 * @Description:
 */

@Controller
@RequestMapping(value = "/data")
public class DataController {

    @RequestMapping(value = "/quarter", method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public List quarterData(){
        Map map = new HashMap();
        map.put("value",0.310);
        List list = new ArrayList();
        list.add(map);
        return list;
    }
}
