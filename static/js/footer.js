function Footer() {
    
}


Footer.prototype.listenHover = function () {
    $('.footer_erweima').hide();
    $('.wechat').hover(function () {
        $('.footer_erweima').show();
    },function () {
        $('.footer_erweima').hide();
    })
};


Footer.prototype.run = function () {
    this.listenHover();
};


$(function () {
   var footer = new Footer();
   footer.run()
});