/*
 * @LastEditors: 杨鑫
 */

const DataSource = {
  data: [
    {
      id: "cxk01",
      name: "蔡徐坤",
      content: "唱、跳、rap、篮球",
      blogPost: "这天的blog，是当一名练习生"
    },
  ],

  addComments: function(id) {
    this.data = this.data.concat({
      id: id,
      name: '蔡徐坤' + id,
      content: "唱、跳、rap、篮球" + new Date(id).toLocaleTimeString(),
      blogPost: "这天的 "+ new Date(id).toLocaleTimeString() +"，是当一名练习生"
    })
  },
  timeout: null,

  addChangeListener: function (_this, callback) {
    this.timeout = setInterval(function() {
      _this[callback]();
    }, 3000);
  },
  removeChangeListener: function (callback) {
    clearInterval(this.timeout);
    this.timeout = null;
  },

  getBlogPost: function(id) {
    return this.data.filter((item) => item.id === id)[0]
  },
  getComments: function () {
    return this.data;
  },
};

export default DataSource;