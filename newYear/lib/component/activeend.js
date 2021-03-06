/**
 *   HB 活动结束
 *   给领取群红包、子红包提供
 *   TODO: 不抽取UI 组件接口的原因是：  抽取TPL,renderTo，this.dom,并不一定能够大范围通用。 且一旦涉及请求，还需要组织一请求接口。接口过多。   让接口仅做纯粹的流程管理。
 */
(function(Wap, M, W){
     var Cmp = Wap.Component;

    var options;
    var ActiveEnd = Cmp.extend({
        ClassName:"ActiveEnd",
//        root: $('body>section'),
        TPL: [
            '<ul>                                                                                ',
            '	<li>                                                                             ',
            '		<div class="big-tip">                                                        ',
            '		</div>                                                                       ',
            '		<div class="small-tip">点击右下角，去苏宁易购买年货吧<em></em></div>         ',
            '	</li>                                                                            ',
            '	<li>                                                                             ',
            '		<div class="share-btn data-focus-sn">                                                     ',
            '			<a href="javascript:void(0);" data-event="share-btn">关注苏宁易购</a>    ',
            '		</div>                                                                       ',
            '	</li>                                                                            ',
            '</ul>                                                                               '
        ].join(''),
        init: function(options){
            this.dom = $(this.TPL);
            this.root = $('body>section');
            this.renderTo = this.root.find('>section');;
//            this.renderTo = $(this.renderTo);
        },
        render: function(){
            this.renderTo.empty().append(this.dom);
        },
        afterRender: function(){
            this.root.removeClass('get-hb').addClass('get-hbs active-end');
            this.root.show();
        }
    })

    M.ActiveEnd = function(options){
        return new  ActiveEnd(options);
    };
})(window.Wap, window.HB,window);
