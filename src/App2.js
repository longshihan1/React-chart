import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class App2 extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let myChart = echarts.init(document.getElementById('main'))
        myChart.setOption(this.setOptions())
    }


    //这是一个最简单的饼图~
    setOptions=()=> {
        return {

            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]







        }
    }


    render() {
        return (
            <div>
                <div id="main" style={{width: "50%", height: "300%"}}/>
            </div>
        );
    }
}

export default App2;
