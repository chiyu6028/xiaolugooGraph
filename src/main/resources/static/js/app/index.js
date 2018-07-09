require(['jquery','plugins/metisMenu/jquery.metisMenu','plugins/slimscroll/jquery.slimscroll.min','plugins/layer/layer.min',
    'plugins/layer/layer.min','contabs.min','plugins/pace/pace.min','plugins/pace/pace.min'/*,'xiaolugoo'*/],
    function ($) {

        var g_user = JSON.parse( localStorage.getItem("g_user"));
        //$("#userName").empty().append(g_user.userName);
        if(g_user.userAccount!=''){
            $("#nickName").empty().append(g_user.userAccount);
        }

        $("#logout").bind("click",function () {
            $.ajax({
                type: "POST",
                url: "/user/logout",
                data: '',
                success: function(resp){
                    var data = JSON.parse(resp);
                    if (data.flag == "-100"){
                        window.location.href='./login.html';
                    }/*else {
                        ShowTip("数据加载失败",'warning');
                    }*/
                }
            });
        })

        $("#updatePassword").bind("click",function () {
            var newPassword1 = $("#newPassword1").val();
            var newPassword2 = $("#newPassword2").val();
            var user = {};
            if (newPassword1 == newPassword2){
                user.userPassword = newPassword1;
            }else {
                //ShowTip("新密码不一致","danger");
                toastr.warning("新密码不一致")
                return;
            }

            user.userId = g_user.userId;
            user.userAccount = g_user.userAccount;
            user.oldPassword = $("#oldPassword").val();
            $.ajax({
                type: "POST",
                url: "/user/updatePassword",
                data: user,
                success: function(resp){
                    var data = JSON.parse(resp);
                    if (data.flag == "1"){
                        $("#closeModal").click();
                        toastr.success("密码修改成功")
                        delCookie('user');
                        delCookie('pswd');
                    }else {
                        ShowTip(data.msg,'warning');
                    }
                }
            });
        })
})