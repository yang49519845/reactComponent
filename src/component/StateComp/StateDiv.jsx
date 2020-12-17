import React from "react";

class StateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        age: 18,
        name: '蔡徐坤',
        like: [
            'sing',
            'dance',
            'rap'
        ]
    }
    this.changeAge.bind(this);
  }
  sayDream() {
      console.log('当练习生')
  }
  changeAge(e) {
      console.log(e)
    this.setState({
        age: e.target.value
    })
  }
  render() {
    return <div>
        <ul>
            <li>name：{this.state.name}</li>
            <li>age: {this.state.age}</li>
            <li>like: {this.state.like.join(',')}</li>
        </ul>
        <button onClick={ this.sayDream }>说出你的梦想</button>
        <span>修改一下年龄</span><input type="text" defaultValue={this.state.age} onChange={ (e) => this.changeAge(e) }/>

    </div>;
  }
}

export default StateComp;