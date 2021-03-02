// app.js
import {
  UserModel
} from '/models/user.js'
const userModel = new UserModel()
App({
  onLaunch() {

    this.getSystemInfo()

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        wx.setStorageSync("user_code", res.code)
      }
    })

  },

  login(userInfo) {
    if (!userInfo) {
      wx.showModal({
        title: "敬请知晓",
        content: "丝路碳惠小程序未经您授权的情况下，无法为您提供完整且体验良好的服务。",
        confirmText: "我知道了",
        showCancel: false
      })
    } else {
      userModel.getOpenId(wx.getStorageSync('user_code'))
        .then(res => {
          wx.setStorageSync("user_token", res.accessToken)
          wx.setStorageSync("user_open_id", res.openUserId)
          console.log(res.data)
        })
    }
    console.log(userInfo)
    console.log("登录")
  },

  globalData: {
    userInfo: null
  },



  getSystemInfo() {
    const {
      statusBarHeight,
      platform
    } = wx.getSystemInfoSync()
    const {
      top,
      height
    } = wx.getMenuButtonBoundingClientRect()

    // 状态栏高度
    wx.setStorageSync('statusBarHeight', statusBarHeight)
    // 胶囊按钮高度 一般是32 如果获取不到就使用32
    wx.setStorageSync('menuButtonHeight', height ? height : 32)

    // 判断胶囊按钮信息是否成功获取
    if (top && top !== 0 && height && height !== 0) {
      const navigationBarHeight = (top - statusBarHeight) * 2 + height
      // 导航栏高度
      wx.setStorageSync('navigationBarHeight', navigationBarHeight)
    } else {
      wx.setStorageSync(
        'navigationBarHeight',
        platform === 'android' ? 48 : 40
      )
    }
  }
})