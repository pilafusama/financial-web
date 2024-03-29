
// 设置cookie
export default {
  filters: {
    formatMoney (val) {
      val = val.toString().replace(/[^\d\.-]/g, '')
      if (isNaN(val)) {
        val = '0'
      }
      let sign = val == (val = Math.abs(val))
      val = Math.floor(val * 100 + 0.50000000001)
      let cents = val % 100
      val = Math.floor(val / 100).toString()
      if (cents < 10) {
        cents = '0' + cents
      }
      for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
        val =
          val.substring(0, val.length - (4 * i + 3)) +
          ',' +
          val.substring(val.length - (4 * i + 3))
      }
      return (sign ? '' : '-') + val + '.' + cents
    },
    formatAccId (val) {
      return val
        .replace(/\s/g, '')
        .replace(/[^\d]/g, '')
        .replace(/^(\d{4})\d+(\d{4})$/g, '$1 **** **** $2')
    }
  }
}