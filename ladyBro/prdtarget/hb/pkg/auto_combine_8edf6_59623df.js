!function(t,e,i){var a=function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes};i.alertBox=function(i){function s(t){this.opts=t||{},this.type=this.opts.type||"doubleBtn",this.title=this.opts.title||"温馨提示",this.cancelText=this.opts.cancelText||"取消",this.confirmText=this.opts.confirmText||"确定",this.cancel=this.opts.cancel||function(){},this.confirm=this.opts.confirm||function(){},this.callback=this.opts.callback||function(){},this.msg=this.opts.msg||""}s.prototype={constructor:s,getEl:function(t,e){return t.querySelector(e)},init:function(){var t=this;t.addAlertBox(),"mini"==t.type?t.minEvent():t.alertEvent()},addAlertBox:function(){var i=this;i.getMask(),i.alertBox=a(i.getHtml())[0],i.alertBox.style.cssText="width:"+parseInt(.7*i.getPos()[0])+"px;top:"+parseInt(i.getPos()[2]+.3*t.innerHeight-i.alertBox.offsetHeight/2)+"px;margin:auto 15%;",i.getEl(e,"body").appendChild(i.alertBox)},getPos:function(){var t=e.documentElement.offsetWidth||e.body.offsetWidth,i=e.documentElement.offsetHeight||e.body.offsetHeight,a=e.documentElement.scrollTop||e.body.scrollTop;return t.innerHeight>i&&(i=t.innerHeight),[t,i,a]},getHtml:function(){var t="",e=this;switch(e.type){case"doubleBtn":t+='<div class="alert-box" id="alertBox"><div class="alert-title">'+e.title+'</div><div class="alert-msg">'+e.msg+'</div><div class="wbox"><a href="javascript:;" class="w-flex ybx-btn ybx-btn-d mr10"><i>'+e.cancelText+'</i></a><a href="javascript:;" class="w-flex ybx-btn ybx-btn-a"><i>'+e.confirmText+"</i></a></div></div>";break;case"onceCancel":t+='<div class="alert-box" id="alertBox"><div class="alert-title">'+e.title+'</div><div class="alert-msg">'+e.msg+'</div><div class="wbox"><a href="javascript:;" class="w-flex ybx-btn ybx-btn-d mlr30">'+e.cancelText+"</a></div></div>";break;case"onceConfirm":t+='<div class="alert-box" id="alertBox"><div class="alert-title">'+e.title+'</div><div class="alert-msg">'+e.msg+'</div><div class="wbox"><a href="javascript:;" class="w-flex ybx-btn ybx-btn-a mlr30">'+e.confirmText+"</a></div></div>";break;case"mini":t+='<div class="alert-box alertBoxBlack" id="alertBox"><div class="alert-msg">'+e.msg+"</div></div>"}return t},getMask:function(){var t=this,i=t.getPos(),a=e.createElement("div");a.id="tMask",t.getEl(e,"body").appendChild(a),a.style.cssText="position:absolute;left:0;top:0;width:"+i[0]+"px;height:"+i[1]+"px;background:rgba(0,0,0,0.3);z-index:99","mini"==t.type&&(a.style.backgroundColor="rgba(255, 255, 255, 0)")},minEvent:function(){var t=this;setTimeout(function(){navigator.userAgent.match(/iPhone/i)?$(t.alertBox).fadeOut(500,function(){t.getEl(e,"body").removeChild(t.alertBox)}):t.remove(t.alertBox),t.remove(t.getEl(e,"#tMask"))},2e3)},alertEvent:function(){var t=this;if(t.alertBox){var e=t.getEl(t.alertBox,".ybx-btn-d"),i=t.getEl(t.alertBox,".ybx-btn-a");e&&t.reset(e,t.cancel),i&&t.reset(i,t.confirm)}},reset:function(t,i){var a=this;t.onclick=function(){i(this),a.remove(a.alertBox),a.remove(a.getEl(e,"#tMask")),a.callback&&a.callback()}},remove:function(t){this.getEl(e,"body").removeChild(t)}},new s(i).init()}}(window,window.document,window.HB=window.HB||{});
;!function(o){o.Const={PRO_PATH:"http://msale.suning.com/mtss-web/",APP_ID:"wx6aed9fdd44da794e",PRO_PATH_BIND:"https://msale.suning.com/mtss-web/",BUY_PATH:"http://m.suning.com/activeload_P443_0.html",D_SNAPP_PATH:"http://mapp.suning.com/a.php?s=qrcode/offline&f=ygznxyrc&pack=com.suning.mobile.ebuy#mp.weixin.qq.com",CHANNEL_ID:"1001001",APP_ANDROID:"http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129",APP_IPHONE:"http://a.app.qq.com/o/simple.jsp?pkgname=com.suning.mobile.ebuy&g_f=992129",SHARE_IMG:"http://sale.suning.com/act/20150227/100/100-100.jpg",FOCUS_SN:"http://mp.weixin.qq.com/s?__biz=MjM5NjA3MTU0MA==&mid=201247335&idx=1&sn=f6ef37131907242d75b347e378460a2b#rd",ACTIVE_RULE:"http://sale.suning.com/act/20150212/gmj/index.html",GUIDES:"http://m.suning.com/channel_P597_0.html",SHARE_TITLE:"有钱，任性！发100元大红包啦！",SHARE_DESC:"有钱，任性！发100元大红包啦！",CHECK_WECHAT:"mps/queryShareConfigInfo.do",BIND_ACCOUNT:"bindaccount.html",GET_GROUP_HB:"getgrouphb.html",GET_HB:"gethb.html",HB_DETAIL:"hbdetail.html",MY_HB:"myhb.html",VALIDATE_CODE:"validatecode.html",DO_VALIDATE_CODE:"gotoBindEgoAccount.do",DO_GET_HB:"mps/normalhb.do",DO_GET_GROUP_HB:"mps/grouphb.do",QUE_MY_TO_HB:"mps/solutionList.do",QUE_MY_FROM_HB:"mps/normalList.do",QUE_HB_DETAIL:"mps/solutionDetail.do",CHECK_PHONE:"verifyBindAct.do",CHECK_CODE:"validateAuthCode.do",GO_BIND_ACCOUNT:"bindEgoAccount.do",SEND_CODE:"register/sendAuthCode.do",REGISTER_BIND:"regBind.do",QUE_SHARE_INFO:"mps/queryShareInfo.do",QUE_FRIEND_LIST:"mps/luckyList.do",IS_TEST:!1}}(window.HB=window.HB||{});
;!function(t,e,n){var i=Array.prototype.slice;!String.format&&(String.prototype.format=function(){var t=1==arguments.length&&arguments[0]instanceof Object,e=t?arguments[0]:arguments,n=t?/\{(\w+)\}/g:/\{(\d+)\}/g;return this.replace(n,function(t,n){return e[n]||""})}),String.prototype.replaceAll=function(t,e){return RegExp.prototype.isPrototypeOf(t)?this.replace(t,e):this.replace(new RegExp(t,"g"),e)},n.$H=e.Util={IMG_HB:"img/nofilter/hb-pic.jpg",IMG_HB_EXPIRED:"img/nofilter/hb-gray.jpg",deferred:function(){var t=i.call(arguments,0);return function(e){for(var n=0,i=t.length;i>n&&t[n](e);n++);}},onlyClass:function(t,e){t.addClass(e).siblings().removeClass(e)},isNoEvent:function(t){return t.hasClass("hb-no-event")},getDate:function(t){try{var e=t.indexOf(".");-1!=e&&(t=t.substring(0,e));var n=t.split(" "),i=n[0].split("-"),o=n[1].split(":");return{y:i[0],m:i[1],d:i[2],h:o[0],mi:o[1],s:o[2]}}catch(r){return{y:1,m:1,d:1,h:1,mi:1,s:1}}},isMobile:function(){return navigator.userAgent.match(/Win/i)||navigator.userAgent.match(/MacIntel/i)||navigator.userAgent.match(/Linux/i)?!1:!0},isPhone:function(){return/(iPhone|iPod|iPad);?/i.test(navigator.userAgent)},isAndriod:function(){return/android/i.test(navigator.userAgent)},setInterval:function(t,e,n){var i=t,o=0,r="",a=function(){var t=i-o;0==t?(clearInterval(r),n&&n()):(e&&e(t),o++)};r=setInterval(a,1e3)},getURLParam:function(){var t=location.search,e=/[^\&]+=[^\&]+/g;if(!t)return{};t=t.slice(1);for(var n,i,o={};n=e.exec(t);)(i=n[0].match(/[^\=]+/g))&&(o[i[0]]=i[1]);return o},toMyHB:function(){this.redirect(this.addURLParam(e.Const.MY_HB,{openId:e.Data.OPEN_ID}))},toGuides:function(){this.redirect(e.Const.GUIDES)},toFocusSN:function(){this.redirect(e.Const.FOCUS_SN)},toGetGroupHB:function(){location.href=this.getWeChat(e.Const.PRO_PATH+e.Const.DO_GET_GROUP_HB)},toValidateCode:function(){location.href=this.getWeChat(e.Const.VALIDATE_CODE)},toApp:function(){this.redirect(this.isPhone()?e.Const.APP_IPHONE:e.Const.APP_ANDROID)},redirectId:function(n,i){this.redirect(n,t.extend({},i,{openId:e.Data.OPEN_ID}))},redirect:function(t,e){t?location.href=e?this.addURLParam(t,e):t:location.reload()},tipNetError:function(){try{Wap.ErrorNet()}catch(t){this.tipError("网络异常，请稍后再试"),console.error("Component Wap.ErrorNet is not exist")}},tipError:function(t){HB.alertBox({type:"mini",msg:t})},addURLParam:function(e,n){var i=-1===e.indexOf("?"),o="&{0}={1}",r="";return t.each(n,function(t,e){r+=o.format(t,e)}),i&&(r=r.replace("&","?")),e+r},toBuy:function(){var t=encodeURIComponent([e.Const.PRO_PATH,e.Const.DO_VALIDATE_CODE,"?target_url=",e.Const.BUY_PATH,"&channel=",e.Const.CHANNEL_ID].join("")),n=this.getWeChat(t,{state:1});this.redirect(n)},toDownLoad:function(){this.redirect(this.isPhone()?e.Const.APP_IPHONE:e.Const.APP_ANDROID)},getWeChat:function(t,n){var i=n||{};-1===t.indexOf("http")&&(t=encodeURIComponent([e.Const.PRO_PATH,"RES/hb/",t].join("")));var o=["https://open.weixin.qq.com/connect/oauth2/authorize?appid={0}&redirect_uri=",t,"&response_type=code&scope=snsapi_base&state={1}#wechat_redirect"].join("");return o.format(e.Const.APP_ID,i.state)},toggle:function(t,e,n){var i,o;n&&(i=n.show,o=n.hide),e?(this.show(t),i&&i()):(this.hide(t),o&&o())},error:function(t){var e=n.console;e||(e={},e.error=function(){}),e.error(t)},formSubmit:function(e,n,i){var o,r,a=[];"string"!=typeof e?(o=e.url,r=e.pros||{}):o=e;var s=t(['<form method="post" action="',o,'" style="position: absolute;top:-2000;left: -2000;" />'].join("")),c='<input type="hidden" name="{0}" value="{1}" />',u=[];r&&t.each(r,function(t,e){s.attr(t,e)}),t.each(n,function(t,e){u.push(c.format(t,e))}),s.append(u.join("")),a=t.makeArray(i);for(var d=0,h=a.length;h>d;d++)s.append(a[d]);t("body").append(s),s.submit(),s&&s.remove()},share:function(t){var n="{0}?activityId={1}&dirPurseId={2}",i=e.Const;t.url=this.getWeChat(encodeURIComponent(n.format(t.path,t.activityId,t.solutionId)));var o={imgUrl:t.shareIcon||i.SHARE_IMG,link:t.url,desc:t.shareContent||i.SHARE_DESC,title:t.title||i.SHARE_TITLE};wx.ready(function(){wx.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems"],success:function(){}}),wx.onMenuShareAppMessage(o),wx.onMenuShareTimeline(o)})},fixedPosHandler:function(e){navigator.userAgent.match(/AppleWebKit.*Mobile.*/)&&t(window).resize(function(){t(e).css({bottom:t(e).offset().top<=300?"-50px":"20px"})})},hideShareBtn:function(t){function e(){t?WeixinJSBridge.call("hideOptionMenu"):(WeixinJSBridge.call("hideToolbar"),WeixinJSBridge.call("showOptionMenu"))}"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e),document.attachEvent("onWeixinJSBridgeReady",e)):e()},getInt:function(t){return t?isNaN(t)?0:parseInt(t):0},isExistLoading:function(){return t(".sn-html5-loading").size()>0},show:function(t){t.style.display="block"},adaptHeight:function(){var e=parseInt(n.innerHeight),i=parseInt(document.body.clientHeight+t(".get-hb-foot").height()),o=Math.max(e,i),r=document.querySelector("section"),a=r.classList;a=Array.prototype.slice.call(a),a.push("pd-hb-btm");var s=a.join(" ");r.style.height=o+"px",r.style.backgroundSize="20rem "+o+"px",i>=e&&(r.className=s)}}}(Zepto,window.HB=window.HB||{},window);
;!function(t){t.Data={IS_MOBILE:$H.isMobile(),URL_PARAM:$H.getURLParam()},t.STYLE={UN_EVENT:"hb-no-event"},t.EVENT={CLICK:t.Data.IS_MOBILE?"touchstart":"click"},$.extend(t.Data,{CODE:t.Data.URL_PARAM.code,OPEN_ID:t.Data.URL_PARAM.openId}),window.test=function(n){t.Const.IS_TEST&&(n instanceof Function?n():alert(n))}}(window.HB=window.HB||{});
;!function(e,t){function a(){o.append(i())}function s(){v&&o.on("click",function(e){var t=e.target,a=$(e.target),s=t.dataset&&t.dataset.event;if(a.hasClass("active-rlue"))location.href=r.ACTIVE_RULE;else switch(s){case"focus-sn":$H.toFocusSN()}return!1})}function i(){var e;return $(".get-hbs").size()>0?e=n:$(".get-hb").size()>0?e=c:v=!1,e}var n='<div class="focus-sn"><a data-event="focus-sn" href="javascript:void(0);"></a></div><div class="active-rlue"></div>',c='<div class="active-rlue"></div>',o=$("header"),r=t.Const,v=!0;a(),s()}(window,window.HB=window.HB||{});
;!function(a,i){function t(){e.append(d)}function o(){e.on(i.EVENT.CLICK,"a",function(){var a=this.id;switch(a){case"data-to-my":$H.toMyHB();break;case"data-to-buy":$H.toBuy();break;case"data-to-guides":$H.toGuides()}return!1})}var d='<ul class="hb-btm"><li><a id="data-to-my" href="javascript:void(0);">我的红包</a></li><li><a id="data-to-guides" href="javascript:void(0);">购物攻略</a></li><li><a id="data-to-buy" href="javascript:void(0);">去购物</a></li></ul>',e=$("footer");t(),o()}(window,window.HB);
;!function(e,t){var n=t.Const;t.Req={getDefError:function(){$H.tipNetError()},getWholeURL:function(e){return-1===e.indexOf("http")?n.PRO_PATH+e:e},req:function(t,n,i,r,o){!o&&(o=this.getDefError),e.ajax({url:this.getWholeURL(t),success:n,error:o,async:void 0===r?!0:r,dataType:"json",data:i,type:"post",timeout:6e4,xhrFields:{withCredentials:"true"}})},queGroupHB:function(e,t,i){this.req(n.QUE_GROUP_HB,e,t,i)},queMyToHB:function(e,t){this.req(n.QUE_MY_TO_HB,e,t)},queMyFromHB:function(e,t){this.req(n.QUE_MY_FROM_HB,e,t)},queHBDetail:function(e,t,i){this.req(n.QUE_HB_DETAIL,e,t,i)},queGetHB:function(e,t){this.req(n.QUE_GET_HB,e,t)},queShareInfo:function(e,t,i){this.req(n.QUE_SHARE_INFO,e,t,i)},queFriendList:function(e,t){this.req(n.QUE_FRIEND_LIST,e,t)},checkPhone:function(e,t){this.req(n.CHECK_PHONE,e,t)},checkCode:function(e,t,i){this.req(n.CHECK_CODE,e,t,i)},bindAccount:function(e,t){$H.redirect($H.getWeChat($H.addURLParam(n.PRO_PATH+n.GO_BIND_ACCOUNT,t)))},sendCode:function(e,t){this.req(n.SEND_CODE,e,t)},regBind:function(e,t){$H.redirect($H.getWeChat($H.addURLParam(n.PRO_PATH_BIND+n.REGISTER_BIND,t)))}}}(Zepto,window.HB);
;!function(i,n){n.InviteFriends=function(i){function t(i){this.options=i||{}}return t.prototype={ClassName:"InviteFriends",TPL:['<div class="fx-overlay">                            ','<ul class="share-text">                          ',"</ul>                                            ","</div>                                              "].join(""),TPL_WORDS:{1:["<li>分享给小伙伴<span>一起领红包</span>吧</li>  ",'<li class="smalldesc">(提醒：每人可领取3个群红包 8个普通红包)</li>'].join(""),3:["<li>红包当然要和小伙伴<span>一起分享</span></li>  ",'<li class="smalldesc">(提醒：每人可领取3个群红包 8个普通红包)</li>'].join(""),2:["<li>好东西一定要和亲爱的小伙伴</li>  ","<li><span>一起分享</span></li>                       "].join("")},init:function(){this.dom=$(this.TPL),this.dom.find("ul").append(this.TPL_WORDS[this.options.status||1]),this.initEvent(),this.render()},initEvent:function(){var i=this;this.dom.on(n.EVENT.CLICK,function(){i.dom.remove(),i.options.remove&&i.options.remove()})},render:function(){var i=this.options;i.before&&i.before(),i.after&&i.after(),$("body>section").append(this.dom)},afterRender:function(){}},new t(i).init()}}(window,window.HB);
;!function(n,i,t){t.ErrorNet=function(n){function t(n){this.options=n||{},this.init(),this.initEvent(),this.render(),this.afterRender()}return t.prototype={ClassName:"ErrorNet",TPL:["<section>",'<section class="error-def">	',"	<div></div>                 ","	<p>网络异常，请稍后再试</p> ","</section>                     ","</section>"].join(""),init:function(){this.dom=i(this.TPL)},initEvent:function(){},render:function(){i("body").prepend(this.dom)},afterRender:function(){}},new t(n)}}(window,window.jQuery||window.Zepto,window.Wap=window.Wap||{});
;!function(e,n){var i=n.Const,o=n.Req,t={ClassName:"WeChat",init:function(e){this.ops=e||{},this._check({url:this.ops.url})},_check:function(e){o.req(i.CHECK_WECHAT,function(e){var n={debug:!1,appId:i.APP_ID,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideMenuItems","showMenuItems"]};wx.config(n)},{shareUrl:encodeURI(location.href)},!0,function(e){console.error("req  "+i.CHECK_WECHAT+" error "+e)})}};t.init()}(window.Wap,window.HB,window);
;!function(s,t){function n(){a()}function e(){s(document).on("click",function(n){var e=n.target,a=s(e),i=e.dataset,o=i&&i.event;switch(o){case"share-btn":return a.parent().hasClass("data-focus-sn")?$H.toFocusSN():c=t.InviteFriends({status:l,after:function(){window.scrollTo(0,0)}}),!1}})}function a(){l=v.activityFlag;var n=g[l];if(!n)return $H.tipNetError();window.HB.OPEN_ID=v.openId,s(".get-hbs").addClass(n.rootClass),s(".small-font").text(n.smallDesc),s(".big-font").text(n.bigDesc),n.btnDesc&&h.text(n.btnDesc),n.afterFn&&n.afterFn(n,v),s(".get-hbs").show(),D.show(),t.Util.adaptHeight();var e={activityId:v.activityId,solutionId:v.solutionId,type:v.shareInfoType,path:t.Const.PRO_PATH+(n.isShareHBs?t.Const.DO_GET_GROUP_HB:t.Const.DO_GET_HB)};t.Req.queShareInfo(function(t){$H.share(s.extend({},e,t))},e,!0)}function i(){p.prepend('<div class="share-tell-txt"><span>告诉你最好的闺蜜们吧</span></div>'),h.parent().addClass("data-focus-sn")}function o(){n(),e()}function r(){$H.hideShareBtn(!1)}var c,l,f=s(".get-hbs"),h=s(".share-btn>a"),d=f.find(">.hb-content>ul"),u=d.find("li:first-child"),b=u.find(".small-font"),p=(u.find(".big-font"),f.find(".share-root")),D=s(".get-hb-foot"),g={3:{rootClass:"remain-hbs",bigDesc:"您的神秘群红包",smallDesc:"",btnDesc:"继续邀请好闺蜜",isShareHBs:!1,afterFn:function(s,t){var n=parseInt(t.total)-parseInt(t.hasNum);b.append(["<p>已被亲们领了<strong>",t.hasNum,"</strong>个,<i></i>还剩<strong>",n,"</strong>个</p>",'<p class="rmain-pare">继续邀请好友，领完有惊喜哦</p>'].join(""))}},2:{rootClass:"u-hbs-end",smallDesc:"",bigDesc:"你的群红包已领完",btnDesc:"分享给小伙伴",isShareHBs:!0,afterFn:function(){}},4:{rootClass:"active-end",smallDesc:"去购物 更多惊喜活动等你参加",bigDesc:"活动已经结束",btnDesc:"关注苏宁易购",isShareHBs:!0,afterFn:function(){i()}},1:{rootClass:"my-hbs",smallDesc:"独乐不如众乐 邀请亲们也来领大钱吧",bigDesc:"群红包到手啦",btnDesc:"邀请闺蜜领红包",afterFn:function(){p.prepend('<div class="share-tell-txt"><span>告诉你最好的闺蜜们吧</span></div>')},isShareHBs:!1},5:{rootClass:"hbs-over",smallDesc:"群红包已发完了",bigDesc:"亲~ 你迟到了",btnDesc:"关注苏宁易购",isShareHBs:!0,afterFn:function(){i()}},6:{rootClass:"active-no-begin",smallDesc:"请稍候",bigDesc:"活动尚未开始",btnDesc:"关注苏宁易购",afterFn:function(){i()},isShareHBs:!0}},v=t.Data.URL_PARAM;s(function(){r(),o()})}(Zepto,HB);
;!function(){var t=function(t){var n="";t.forEach(function(t){n+=['<script type="text/javascript" async="true" src="',t,'"></script>'].join("")}),document.body.insertAdjacentHTML("beforeend",n)};window.addEventListener("load",function(){setTimeout(function(){t(["https://imgssl.suning.com/javascript/sn_da/da_opt.js"])},100)})}();