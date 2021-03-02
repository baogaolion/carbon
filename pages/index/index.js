// index.js
// 获取应用实例
const app = getApp()

Page({

  data: {
    userInfo: null,
    authorized: false,
    images:Array
  },

  onLoad() {
    this._setNavBar()
    this.userAuthorized()
    
    let images = [
      {"url":"/images/welcome.png"},
      {"url":"/images/welcome.png"},
      {"url":"/images/welcome.png"},
      {"url":"/images/welcome.png"}
    ]
   
    this.setData({
      images: images
    })

    // if (!this._getFistEnter()) {
    //   wx.navigateTo({
    //     url: '../welcome/welcome',
    //   })
    // }
  },
  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    if (userInfo) {
      // this.setData({
      //   userInfo,
      //   authorized: true
      // })
      console.log(userInfo)
    }
  },
  userAuthorized() {
    let that = this
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
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