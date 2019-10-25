function Header() {

}

Header.prototype.clickevent = function () {
    self = this;
    $('.header-info li').each(function (index,obj) {
        $(obj).click(function () {
            $(obj).addClass('active').siblings('li').removeClass('active');
        })
    })
};

Header.prototype.run = function () {
    self = this;
    self.clickevent();
};

$(function () {
    var header = new Header();
    header.run()
});