function Roll () {
    self = this;
    self.index = 0;
    self.liCount = $('.roll_ul li').length;
    self.roll_ul = $('.roll_ul');
    self.arrow = $('.arrow');
    self.leftarrow = $('.left');
    self.rightarrow = $('.right');
    self.roll_wrapper = $('.roll-wrapper');
    self.pagecontrol = $('.page-controll');

}


//自动轮播
Roll.prototype.loop = function () {
    self = this;
    self.timer = setInterval(function () {
        if (self.index >= self.liCount-1) {
            self.index = 0;
        }else {
            self.index ++;
        }
        self.roll_ul.animate({'left':-798 * self.index},1500);
        self.pagecontrol.children('li').eq(self.index).addClass('active').siblings('li').removeClass('active');
    },2000)
};


//根据轮播图片的个数，来动态获取小圆点
Roll.prototype.initPageControl = function () {
    self = this;
    self.pagecontrol.css({'width':self.liCount*12 + self.liCount*6});
    for (i=0; i<self.liCount; i++) {
        self.circle = $('<li></li>');
        self.pagecontrol.append(self.circle);
        if (i === 0) {
            self.circle.addClass('active');
        }
    }
};

//点击小圆点事件
Roll.prototype.pageControllClick = function () {
    self = this;
    self.pagecontrol.children('li').each(function (index,obj) {
        $(obj).click(function () {
            $(obj).addClass('active').siblings('li').removeClass('active');
            self.roll_ul.animate({'left': -798*index},1500)
        })
    })
};


//初始化轮播图的宽度，使其在增加图片的时候宽度也可以跟着增加
Roll.prototype.initRollUl = function () {
    self = this;
    self.roll_ul.css({'width': 798 * self.liCount})
};


//监听鼠标是否在轮播图上面
Roll.prototype.listenHover = function () {
    self = this;
    self.arrow.hide();
    self.roll_wrapper.hover(function () {
        clearInterval(self.timer);
        self.arrow.show();
    },function () {
        self.loop();
        self.arrow.hide();
    })
};


//监听鼠标点击箭头按钮
Roll.prototype.listenArrowClick = function () {
    self = this;
    self.rightarrow.click(function () {
        self.index += 1;
        if (self.index > self.liCount - 1) {
            self.index = 0;
        }
        self.roll_ul.animate({'left':-798*self.index},500);
    });
    self.leftarrow.click(function () {
        self.index -= 1;
        if (self.index < 0) {
            self.index = self.liCount - 1;
        }
        self.roll_ul.animate({'left':-798*self.index},500);
    });

};

Roll.prototype.run = function () {
    self = this;
    self.loop();
    self.listenHover();
    self.listenArrowClick();
    self.initPageControl();
    self.initRollUl();
    self.pageControllClick();
};

$(function () {
    var roll = new Roll();
    roll.run();
});