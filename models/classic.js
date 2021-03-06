import {HTTP} from '../utils/http.js'
let http = new HTTP()

class ClassicModel {
    getLatest(sCallback){
        http.request({
            url:'classic/latest',
            success:res=>{
                
              sCallback(res)
              this._setLatestIndex(res.index)
            }
         })
    }
    getPrevious(index,sCallback){
        http.request({
            url:'classic/'+ index +'/previous',
            success:res=>{
                
              sCallback(res)
            }
        })
    }

    getNext(index,sCallback){
        http.request({
            url:'classic/'+ index +'/next',
            success:res=>{
                
              sCallback(res)
            }
        })
    }

    isFirst(index){
        return index == 1?true:false
    }

    isLatest(index){
        let latestIndex = this._getLatestIndex()
        return latestIndex == index?true:false
    }

    _setLatestIndex(index){
           wx.setStorageSync('latest',index)
            
    }
    _getLatestIndex(){
        let index = wx.getStorageSync('latest');
        return index
    }
}

export {ClassicModel}