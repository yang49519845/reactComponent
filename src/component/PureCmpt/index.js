import React, { useEffect, useState, Component, PureComponent } from 'react';
import { connect } from 'dva';
import { Input, Button, Tag } from 'antd';
import CounterButton from './pureComponent';

class Index extends PureComponent{
    constructor(props) {
        super()
    }
    state={
        inputValue: 'default',
        test: [
            {name: '1', key: '1_ind'},
            {name: '2', key: '2_ind'},
            {name: '3', key: '3_ind'}
        ]
    }
    changeIV = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    changeBTV = (e) => {
        this.setState({
            inputValue: 'default',
            test: [
                {name: '1', key: '1_ind'},
                {name: '2', key: '2_ind'},
                {name: '3', key: '3_ind'}
            ]
        })
    }

    render() {
        console.log('purePraent1111')
        const { inputValue, test } = this.state
        return (
            <div>
                <CounterButton value={inputValue} color={'red'}/>
                {/* <CounterButton color={'red'}/> */}
                <Input type="text" value={inputValue} onChange={this.changeIV}/>
                { test.map(item => <Tag key={item.key}>{item.name}</Tag>) }
                <Button onClick={this.changeBTV}>点击是否更新当前组件</Button>
            </div>
        )
    }
}

Index.propTypes = {};

export default connect()(Index);