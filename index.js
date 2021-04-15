
const previewVue = document.querySelector("#preview-vue")
const qrcode_vue = document.querySelector(".account_vue")
const doraemon = document.querySelector("#doraemon")
const qrcode_doraemon = document.querySelector(".doraemon")
const canvas = document.querySelector("#canvas")
const qrcode_canvas = document.querySelector(".canvas")
const dingdangUi = document.querySelector("#dingdang-ui")
const qrcode_dingdang = document.querySelector(".dingdang_vue")
const oldTimes = document.querySelector("#old-times")
const qrcode_oldTimes = document.querySelector(".old-times")
const width = document.documentElement.clientWidth


function previewQrCode(target, show,event1,event2) {
    target.addEventListener(event1, () => {
        show.classList.add("show")

    })
    target.addEventListener(event2, () => {
        if (Array.from(show.classList).indexOf("show") >= 0) {
            show.classList.remove("show");
        }
    })
}

if (width > 500) {
    previewQrCode(previewVue, qrcode_vue,"mouseenter","mouseleave")
    previewQrCode(doraemon, qrcode_doraemon,"mouseenter","mouseleave")
    previewQrCode(canvas, qrcode_canvas,"mouseenter","mouseleave")
    previewQrCode(dingdangUi, qrcode_dingdang,"mouseenter","mouseleave")
    previewQrCode(oldTimes, qrcode_oldTimes,"mouseenter","mouseleave")
}else{

    (function ($) {
        $('#old-times').on("tap",function(){
            if($(this).hasClass('show')){
                $('.old-times').hide()
                $('.old-times').removeClass('show')
                return
            }
            $('.old-times').addClass('show')
        })

        document.addEventListener('touchstart',function (e) {
            var parent=$(e.target).parents('.old-times');

            if(parent.length===0){
                console.log('不在弹层与按钮区')
                //操作此区域

                $('.old-times').removeClass('show');

            }else{
                console.log('按钮与弹层区')
            }
        })
    })(jQuery);

}
