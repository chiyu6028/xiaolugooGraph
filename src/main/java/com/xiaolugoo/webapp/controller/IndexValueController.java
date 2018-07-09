package com.xiaolugoo.webapp.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xiaolugoo.webapp.service.IndexValueService;
import com.xiaolugoo.webapp.util.ResultData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.websocket.server.PathParam;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/6/10 09:46
 * @Description:
 */

@Api(tags = "指标值")
@Controller
@RequestMapping(value = "/indexValue")
public class IndexValueController {

    Logger logger = LoggerFactory.getLogger(IndexValueController.class);

    @Autowired
    IndexValueService indexValueService;

    @Autowired
    ObjectMapper mapper;

    @ApiOperation(value="指标值查询", notes="指标值查询")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "indexId", value = "指标编号", paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "indexType", value = "指标类型", paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "indexName", value = "指标名称", paramType = "query", dataType = "String")
    })
    @ResponseBody
    @RequestMapping(value = "/findIndexValue",method = {RequestMethod.GET,RequestMethod.POST})
    public String findIndexValue(@PathParam("indexId") String indexId,
                            @PathParam("indexName") String indexName,
                            @PathParam("beginDate") String beginDate,
                            @PathParam("endDate") String endDate) throws JsonProcessingException {
        logger.debug("指标值查询");
        ResultData result = new ResultData();

        Map params = new HashMap();
        params.put("indexId",indexId);
        params.put("indexName",indexName);
        params.put("beginDate",beginDate);
        params.put("endDate",endDate);

        List<Map<String,Object>> indexs = indexValueService.findIndexValue(params);

        List data = getDouber(indexs);

        if (data.size() > 0){
            result.setFlag("1");
            result.setMsg("查询成功！");
            result.setResult(data);
        }else {
            result.setFlag("0");
            result.setMsg("查询失败！");
        }

        return mapper.writeValueAsString(result);
    }

    public List getDouber(List<Map<String,Object>> indexs){
        List data = new ArrayList();
        DecimalFormat df = new DecimalFormat("#0.0");
        for (Map<String,Object> map : indexs){
            Map amap = new HashMap();
             for (Map.Entry<String, Object> entry : map.entrySet()){
                String key = entry.getKey();
                 Object value = entry.getValue();
                if (key.length() == 5){
                    //List alist = new ArrayList();
                    Map<String,Double> rmap = (HashMap) value;
                    Map bmap = new HashMap();
                    for (Map.Entry<String,Double> rentry : rmap.entrySet()){

                        String rkey = rentry.getKey();
                        Double rvalue = rentry.getValue();
                        String rdata = null;
                        if (rvalue.toString().contains("99999999") || rvalue.toString().contains("000000000")){
                            rdata = df.format(rvalue);
                        }else {
                            rdata = rvalue.toString();
                        }
                        bmap.put(rkey,rdata);
                    }
                    amap.put(key,bmap);
                }else{
                    amap.put(key,value);
                }
             }
             data.add(amap);
        }
        return data;
    }

}
