Component({
  data: {
    drags: [{
      'url': '/pages/coinlist/index',
      'icon': 'icon-index',
      "pos": {
        l: 0,
        t: 0,
        opc: 0
      }
    },
    {
      'url': '/pages/coindetails/index',
      'icon': 'icon-card',
      "pos": {
        l: 0,
        t: 0,
        opc: 0
      }
    },
    {
      'url': '/pages/index/index',
      'icon': 'icon-me',
      "pos": {
        l: 0,
        t: 0,
        opc: 0
      }
    },
    {
      'url': '/pages/coinconfirm/index',
      'icon': 'icon-market',
      "pos": {
        l: 0,
        t: 0,
        opc: 0
      }
    }
    ],
    pos: {
      x: 0,
      y: 0
    },
    sty: {
      x: '',
      y: ''
    },
    screen: {
      x: wx.getSystemInfoSync().windowWidth,
      y: wx.getSystemInfoSync().windowHeight
    },
    ele: {
      w: 0,
      h: 0,
      x: 0,
      y: 0
    },
    tFlag: 0,
    flag: true,
    aDis: 100,
    zl: false,
    zt: false,
  },
  ready:function() {
    let query = this.createSelectorQuery(),
      drags = this.data.drags;
    query.select('.drag-menu').boundingClientRect()
    query.exec((res) => {
      drags.forEach(i => {
        i.pos = { l: res[0].left, t: res[0].top, opc: 0 }
      })
      this.setData({
        ele: {
          w: res[0].width,
          h: res[0].height,
          x: res[0].left,
          y: res[0].top
        },
        drags: drags
      })
    })
  },
  methods: {
    start(e) {
      let ele = this.data.ele,
        ax = this.data.screen.x - ele.w,
        ay = this.data.screen.y - ele.h,
        zl = this.data.zl,
        zt = this.data.zt,
        ox = e.currentTarget.offsetLeft,
        oy = e.currentTarget.offsetTop;
      if (ox > ax / 2) {
        zl = true;
      } else {
        zl = false;
      }
      if (oy > ax / 2) {
        zt = true;
      } else {
        zt = false;
      }
      // 初始化
      this.setData({
        tFlag: 0,
        zl: zl,
        zt: zt,
        pos: {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        },
        ele: {
          w: ele.w,
          h: ele.h,
          x: ox,
          y: oy
        }
      })
    },
    move(e) {
      let ele = this.data.ele,
        mx = e.touches[0].pageX - this.data.pos.x,
        my = e.touches[0].pageY - this.data.pos.y,
        ax = this.data.screen.x - ele.w,
        ay = this.data.screen.y - ele.h,
        stx = mx + ele.x,
        sty = my + ele.y,
        drags = this.data.drags;
      // 限制范围
      if (stx < 0) {
        stx = 0;
      }
      if (stx > ax) {
        stx = ax;
      }
      if (sty < 0) {
        sty = 0;
      }
      if (sty > ay) {
        sty = ay;
      }
      drags.forEach(i => {
        i.pos = {
          l: stx,
          t: sty,
          opc: 0
        }
      })
      this.setData({
        tFlag: 1,
        sty: {
          x: stx,
          y: sty
        },
        drags: drags
      })
    },
    end() {
      if (this.data.tFlag === 0) {
        let flag = this.data.flag;
        if (flag) {
          flag = false;
          this.toggle(this.data.zl, this.data.zt, 0.1);
        } else {
          flag = true;
          this.toggle(!this.data.zl, !this.data.zt, -0.1);
        }
        this.setData({
          flag: flag
        })
      }
    },
    // 点击函数
    toggle(zl, zt, za) {
      let drags = this.data.drags,
        times = 0,
        timer = null;
      timer = setInterval(() => {
        times++;
        if (times > 9) {
          clearInterval(timer);
        }
        drags.forEach((i, index) => {
          // 每次移动的距离
          let px = this.data.aDis * Math.cos(2 * Math.PI / 360 * (90 / (drags.length - 1) * index)) / 10,
            py = this.data.aDis * Math.sin(2 * Math.PI / 360 * (90 / (drags.length - 1) * index)) / 10;
          if (zl) {
            i.pos.l -= px;
          } else {
            i.pos.l += px;
          }
          if (zt) {
            i.pos.t -= py;
          } else {
            i.pos.t += py;
          }
          i.pos.opc += za;
        })
        this.setData({
          drags: drags
        })
      }, 30)
    }
  }
})