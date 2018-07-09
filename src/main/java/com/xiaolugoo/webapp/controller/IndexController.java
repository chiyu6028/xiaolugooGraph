package com.xiaolugoo.webapp.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xiaolugoo.webapp.service.IndexService;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Auther: ALEX
 * @Date: 2018/6/10 09:46
 * @Description:
 */

@Api(tags = "指标")
@Controller
@RequestMapping(value = "/index")
public class IndexController {

    Logger logger = LoggerFactory.getLogger(IndexController.class);

    @Autowired
    IndexService indexService;

    @Autowired
    ObjectMapper mapper;

    @ApiOperation(value="指标查询", notes="指标查询")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "indexId", value = "指标编号", paramType = "query", dataType = "Integer"),
            @ApiImplicitParam(name = "indexType", value = "指标类型", paramType = "query", dataType = "String"),
            @ApiImplicitParam(name = "indexName", value = "指标名称", paramType = "query", dataType = "String")
    })
    @ResponseBody
    @RequestMapping(value = "/findIndex",method = {RequestMethod.GET,RequestMethod.POST})
    public String findIndex(@PathParam("indexId") String indexId,
                            @PathParam("indexType") String indexType,
                            @PathParam("indexName") String indexName) throws JsonProcessingException {
        logger.debug("指标查询");
        ResultData result = new ResultData();

        Map params = new HashMap();
        params.put("indexId",indexId);
        params.put("indexType",indexType);
        params.put("indexName",indexName);

        List indexs = indexService.findIndex(params);

        if (indexs.size() > 0){
            result.setFlag("1");
            result.setMsg("查询成功！");
            result.setResult(indexs);
        }else {
            result.setFlag("0");
            result.setMsg("查询失败！");
        }

        return mapper.writeValueAsString(result);
    }

}
