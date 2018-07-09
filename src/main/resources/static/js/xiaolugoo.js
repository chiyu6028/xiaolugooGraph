$(document.body).append('<script src="../js/plugins/toastr/toastr.min.js"></script>');
    function ShowTip(tip, type) {
        var $tip = $('#tip');
        if ($tip.length == 0) {
            $tip = $('<span id="tip" style="width:300px; height:50px;text-align: center; ' +
                'font-weight:bold;position:absolute;top:50px;left: 50%;z-index:9999"></span>');
            $('body').append($tip);
        }
        $tip.stop(true).attr('class', 'alert alert-' + type).text(tip)
            .css('margin-left', -$tip.outerWidth() / 2).fadeIn(2000).delay(2000).fadeOut(2000);
    }

    function setCookie(name, value, day) {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = name + '=' + value + ';expires=' + date;
    };

//获取cookie
    function getCookie(name) {
        var reg = RegExp(name + '=([^;]+)');
        var arr = document.cookie.match(reg);
        if (arr) {
            return arr[1];
        } else {
            return '';
        }
    };

//删除cookie
    function delCookie(name) {
        setCookie(name, null, -1);
    };

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "1100",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
/*define(['jquery','plugins/toastr/toastr.min'], function ($,toastr) {
var xiaolugoo = {};

xiaolugoo.setCookie = function (name, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
};

//获取cookie
xiaolugoo.getCookie = function(name) {
    var reg = RegExp(name + '=([^;]+)');
    var arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
};

//删除cookie
xiaolugoo.delCookie = function (name) {
    setCookie(name, null, -1);
};

xiaolugoo.toastr = toastr;

xiaolugoo.toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "onclick": null,
    "showDuration": "400",
    "hideDuration": "1000",
    "timeOut": "1100",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

return xiaolugoo;
})*/
