// pages/coinconfirm/index.js
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
      'total': '110.00',
    },
    address: {
      'name': '刘亦菲',
      'mobile': '15061182712',
      'area': '北京 北京市 东城区 22222222',
      'type': 20
    },
    cFlag: true,
    sFlag: true
  },
  toExchange: function() {
    if (this.data.address.name) {
      this.setData({
        cFlag: false
      })
    }
  },
  confirm: function() {
    this.setData({
      cFlag: true,
      sFlag: false
    })
  },
  cancel: function() {
    this.setData({
      cFlag: true
    })
  },
  toInfo: function() {
    this.setData({
      sFlag: true
    })
    wx.navigateTo({
      url: '/pages/coininfo/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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