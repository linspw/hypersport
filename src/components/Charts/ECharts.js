import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');

export default class EChartComponent extends React.Component{
    getOption = () => {
        return {
          title: {
            text: 'Store'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['Telefone','联盟广告','视频广告']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'Telefone',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[150, 232, 201, 154, 190, 330, 410]
            }
          ]
        };
      };

    render(){
        return(
            <ReactEcharts
            option={this.getOption()}
            style={{minHeight: '150px', width: '100%'}}
            className='react_for_echarts' />);
        }
}