// 设置cookie
export default {
  setCookie: function (cname, cvalue, exdays = 0) {
    var d = new Date()
    if (exdays !== 0) {
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    }
    var expires = 'expires=' + d.toUTCString()
    // console.info(cname + '=' + cvalue + '; ' + expires)
    document.cookie = cname + '=' + cvalue + '; ' + expires
    // console.info(document.cookie)
  },
  // 获取cookie
  getCookie: function (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
    }
    return ''
  },
  // 清除cookie
  clearCookie: function (key) {
    this.setCookie(key, '', -1)
  },
  checkCookie: function () {
    var user = this.getCookie('username')
    if (user !== '') {
      // alert('Welcome again ' + user)
    } else {
      user = prompt('Please enter your name:', '')
      if (user !== '' && user != null) {
        this.setCookie('username', user, 365)
      }
    }
  }
}
