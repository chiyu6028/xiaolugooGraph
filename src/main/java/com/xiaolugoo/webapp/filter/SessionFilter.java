package com.xiaolugoo.webapp.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.xiaolugoo.webapp.util.ResultData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @Auther: ALEX
 * @Date: 2018/5/8 14:21
 * @Description:
 */
@Configuration
public class SessionFilter implements Filter {

    Logger logger = LoggerFactory.getLogger(SessionFilter.class);

    private String passUrl;

    private String static_resource;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        logger.debug("sessionFilter init");
        passUrl = filterConfig.getInitParameter("passUrl");
        static_resource = filterConfig.getInitParameter("static_resource");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpSession session = httpServletRequest.getSession();
        ObjectMapper mapper = new ObjectMapper();
        //获取登录uri
        String uri = httpServletRequest.getRequestURI();
        String[] passURI = null;
        String[] resources = null;
        if (passUrl!=null){
            passURI = passUrl.split(",");
        }
        if (static_resource != null){
            resources = static_resource.split(",");
        }
        boolean pass = false;
        //判断是否需要登录验证
        for (String str : passURI){
            if (uri.equals(str.trim())){
                pass = true;
                break;
            }
        }

        //判断静态页面
        for (String resource : resources) {
            if (uri.contains(resource)){
                pass = true;
                break;
            }
        }

        if ((session.getAttribute("loginFlag") != null && (boolean)session.getAttribute("loginFlag"))||pass){
            filterChain.doFilter(servletRequest,servletResponse);
        }else{
            ResultData resultData = new ResultData();
            servletResponse.setCharacterEncoding("utf-8");
            servletResponse.setContentType("text/json;charset=UTF-8");
            //response.sendRedirect("/");
            /*try (PrintWriter o = servletResponse.getWriter()) {
                resultData.setFlag("-100");
                resultData.setMsg("session会话过期，请重新登陆");
                String msg = mapper.writeValueAsString(resultData);
                o.print(msg);
                logger.error("session会话过期");
                o.flush();
            }*/
            response.sendRedirect("/");
            //httpServletRequest.getRequestDispatcher("/").forward(servletRequest, servletResponse);
            return;
        }
    }

    @Override
    public void destroy() {
        logger.debug("sessionFilter destroy");
    }
}
