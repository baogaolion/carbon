// index.js
// 获取应用实例
const app = getApp()

Page({

  data: {

  },
  onLoad() {
    if(!this._getFistEnter()) {
      wx.navigateTo({
        url: '../welcome/welcome',
      })
    }
  },
  _isFirstEnter(isFirst) {
    wx.setStorageSync('firstEnter', true)
  },
  _getFistEnter() {
    return wx.getStorageSync('firstEnter')
  }

})