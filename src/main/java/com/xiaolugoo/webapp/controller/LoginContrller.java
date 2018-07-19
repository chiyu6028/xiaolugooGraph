package com.xiaolugoo.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Auther: ALEX
 * @Date: 2018/6/13 23:31
 * @Description:
 */
@Controller
public class LoginContrller {

    @RequestMapping("/")
    public String login() {
        return "forward:/login.html";
    }

    @RequestMapping("/pages/main")
    public String pagesMain() {
        return "forward:/pages/main.html";
    }
}
