// pages/my/my.js
import {
  ClassicModel
} from '../../models/classic.js'
import {
  BookModel
} from '../../models/book.js'

let classicModel = new ClassicModel()
let bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     authorized:false,
     userInfo: null,
     bookCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()
    this.getMyBookCount()
  //    wx.getUserInfo(
  //      {
  //        success:data=>{
  //          console.log(data)
  //        }
  //      }
  //    )
  },
  getMyBookCount(){
    bookModel.getMyBookCount(data => {
      this.setData({
        myBooksCount: data.count
      })
    })
  },


  userAuthorized(){
    wx.getSetting({
       success: data => {
      if(data.authSetting['scope.userInfo']){
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

  onGetUserInfo: function(event) {
    let userInfo = event.detail.userInfo
    
    if (userInfo) {
      this.setData({
        authorized: true,
        userInfo: userInfo
      })
    }
  },
  onJumpToAbout: function(event) {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})