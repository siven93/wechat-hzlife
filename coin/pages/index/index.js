//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    layerFlag: true
  },
  showLayer: function() {
    this.setData({
      layerFlag: false
    })
  },
  closeLayer: function() {
    this.setData({
      layerFlag: true
    })
  },
  onLoad: function() {}
})