!function(e,n){var i=n.Const,o=n.Req,t={ClassName:"WeChat",init:function(e){this.ops=e||{},this._check({url:this.ops.url})},_check:function(e){o.req(i.CHECK_WECHAT,function(e){var n={debug:!1,appId:i.APP_ID,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideMenuItems","showMenuItems"]};wx.config(n)},{shareUrl:encodeURI(location.href)},!0,function(e){console.error("req  "+i.CHECK_WECHAT+" error "+e)})}};t.init()}(window.Wap,window.HB,window);