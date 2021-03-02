// index.js
// 获取应用实例
const app = getApp()

Page({

  data: {

  },
  onLoad() {
    this._setNavBar()
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
  },
  _setNavBar() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#133c88'
    })
  }
})