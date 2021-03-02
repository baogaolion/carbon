import {
  HTTP
}
from '../utils/http.js'

class UserModel extends HTTP {

  getOpenId(code) {
    return this.request({url:'user/login', data:{code}, method:'post'})
  }

}

export{UserModel}