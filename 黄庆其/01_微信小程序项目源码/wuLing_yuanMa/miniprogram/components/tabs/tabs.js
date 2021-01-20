// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //要接收的数据的名称
    // shili:{
    //   // type 要接收的数据的类型
    //   type:String,
    //   // 要接收的数据
    //   value:""
    // }
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldeItemTap(e) {
      // console.log(e.currentTarget.dataset.index)
      //获取索引
      const { index } = e.currentTarget.dataset;
      // 触发父组件中的自定义事件，同时传递数据给父组件
      this.triggerEvent("itemChange", { index });
      //解构 对复杂类型进行解构的时候，复制了一份，变量的引用而已
      //最严谨的做法 重新拷贝一份数据，再对这个数组的备份进行处理，
      //最严谨 let tabs=JSON.parse(JSON.stringify(this.data.tabs));
      //不要直接修改this.data的数据
      // let{tabs}=this.data;
      //let{tabs}=this.data;等价于let tabs=this.data.tabs;
      //循环数据
      //forEach遍历数组，遍历数组的时候修改了v,也会导致原数组被修改
      // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      // this.setData({
      //   tabs
      // })
    }
  }
})
