// pages/coindetails/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proData: {
      'name': '韩国SNP嫩白安瓶精华面膜',
      'price': '110.00',
      'img': 'http://test.hz-life.com/upload/201807/04/10.jpg',
      'num': 1,
      'coin': '390'
    },
    dFlag: true,
    disabled: false,
    cnum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let proData = this.data.proData;
    if (proData.num * proData.price > proData.coin) {
      this.setData({
        disabled: true
      })
    }
  },
  minusNum: function() {
    let proData = this.data.proData;
    if (proData.num < 2) {
      return false;
    }
    proData.num--;
    this.setData({
      proData: proData
    })
  },
  addNum: function() {
    let proData = this.data.proData;
    if (this.data.disabled) {
      return false;
    }
    if ((parseInt(proData.num) + 1) * proData.price > proData.coin) {
      return false;
    }
    proData.num++;
    this.setData({
      proData: proData
    })
  },
  closeLayer: function() {
    if (this.data.disabled) {
      return false;
    }
    this.setData({
      dFlag: true
    })
  },
  toCoinConfirm: function() {
    let cnum = this.data.cnum;
    if (this.data.disabled) {
      return false;
    }
    if (this.data.dFlag) {
      this.setData({
        dFlag: false
      })
      cnum = 0;
    }
    ++cnum;
    this.setData({
      cnum: cnum
    })
    if (cnum > 1) {
      wx.navigateTo({
        url: '/pages/coinconfirm/index'
      })
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})