!function(t){t.Data={IS_MOBILE:$H.isMobile(),URL_PARAM:$H.getURLParam()},t.STYLE={UN_EVENT:"hb-no-event"},t.EVENT={CLICK:t.Data.IS_MOBILE?"touchstart":"click"},$.extend(t.Data,{CODE:t.Data.URL_PARAM.code,OPEN_ID:t.Data.URL_PARAM.openId}),window.test=function(n){t.Const.IS_TEST&&(n instanceof Function?n():alert(n))}}(window.HB=window.HB||{});