odoo.define("web_tree_hover_tooltip.web_tree_hover_tooltip", function (require) {
    "use strict";

    var ListRenderer = require("web.ListRenderer");
    ListRenderer.include({
        events: _.extend({}, ListRenderer.prototype.events, {
            "mouseover tbody tr td .o_form_uri": "_onHoverRecord_img",
        }),
        // function getText( obj ) {
        //     return obj.textContent ? obj.textContent : obj.innerText;
        // }
        _onHoverRecord_img: function (event) {
            // var img_src = $(event.currentTarget.parentElement.parentElement.children[1]);
            var img_src2 = $(event.currentTarget.parentNode.parentNode.children[2].childNodes[0])[0];
            // console.log('adfadfasdfadfadfsdfsdf',img_src2,'ddd',img_src2.textContent); //innerHTML
            $(event.currentTarget)
                .tooltip({
                    title: "<img src='/odes_custom/static/src/img/icon/lead_lt7.png' style='width: 5px; height: 45px;'/><span>"+img_src2.textContent+"</span>",
                    delay: 0,
                })
                .tooltip("show");
        },
    });
});

// title: "<span " +  + " >" +"'2222'"+"</span>" ,