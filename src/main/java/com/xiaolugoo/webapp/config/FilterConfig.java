package com.xiaolugoo.webapp.config;

import com.xiaolugoo.webapp.filter.SessionFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

/**
 * @Auther: ALEX
 * @Date: 2018/5/8 16:46
 * @Description:
 */

@Configuration
public class FilterConfig {

    @Value("${passUrl}")
    private String passUrl;

    @Value("${static_resource}")
    private String static_resource;

    @Bean
    public FilterRegistrationBean sessionFilte(){
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(new SessionFilter());
        filterRegistrationBean.addUrlPatterns("/*");
        filterRegistrationBean.addInitParameter("passUrl", passUrl);
        filterRegistrationBean.addInitParameter("static_resource", static_resource);
        return filterRegistrationBean;
    }
}
