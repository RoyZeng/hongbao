!function(t,e){var n=e.Const;e.Req={getDefError:function(){$H.tipNetError()},getWholeURL:function(t){return-1===t.indexOf("http")?n.PRO_PATH+t:t},req:function(e,n,i,o,r){!r&&(r=this.getDefError),t.ajax({url:this.getWholeURL(e),success:n,error:r,async:void 0===o?!0:o,dataType:"json",data:i,type:"post",timeout:6e4,xhrFields:{withCredentials:"true"}})},queGroupHB:function(t,e,i){this.req(n.QUE_GROUP_HB,t,e,i)},queMyToHB:function(t){t(TestData.MyHB_TO)},queMyFromHB:function(t){t(TestData.MY_HB_FROM)},queHBDetail:function(t){t(TestData.HB_DETAIL)},queGetHB:function(t,e){this.req(n.QUE_GET_HB,t,e)},queShareInfo:function(t){t(n.QUE_SHARE_INFO)},queFriendList:function(t){t(TestData.GET_HB_FRIEND)},checkPhone:function(t,e){this.req(n.CHECK_PHONE,t,e)},checkCode:function(t,e,i){this.req(n.CHECK_CODE,t,e,i)},bindAccount:function(t,e){$H.redirect($H.getWeChat($H.addURLParam(n.PRO_PATH+n.GO_BIND_ACCOUNT,e)))},sendCode:function(t,e){this.req(n.SEND_CODE,t,e)},regBind:function(t,e){$H.redirect($H.getWeChat($H.addURLParam(n.PRO_PATH_BIND+n.REGISTER_BIND,e)))}}}(Zepto,window.HB);