// components/coupon/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object,
    index: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached() {
    console.log(this.properties)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      let data = e.currentTarget.dataset
      console.log(data)
      if (!data.item.isValid) {
        wx.showToast({
          title: '优惠券不可用，请重新选择',
          duration: 2000,
          icon: 'none'
        })

        return false
      }

      this.triggerEvent('select', { index: data.index, selected: data.item.selected})
    }
  }
})
