import React, { Component } from 'react';
import { Column } from '@ant-design/charts';
import { connect } from 'umi';
// const DemoColumn: React.FC = () => {
//   const data = [
//     {
//       action: '浏览网站',
//       pv: 50000,
//     },
//     {
//       action: '放入购物车',
//       pv: 35000,
//     },
//     {
//       action: '生成订单',
//       pv: 25000,
//     },
//     {
//       action: '支付订单',
//       pv: 15000,
//     },
//     {
//       action: '完成交易',
//       pv: 8500,
//     },
//   ];
//   const config = {
//     title: {
//       visible: true,
//       text: '基础柱状图-转化率组件',
//     },
//     description: {
//       visible: true,
//       text: '基础柱状图的图形之间添加转化率标签图形\uFF0C用户希望关注从左到右的数据变化比例',
//     },
//     forceFit: true,
//     data,
//     padding: 'auto',
//     xField: 'action',
//     yField: 'pv',
//     conversionTag: { visible: true },
//   };
//   console.log({...config})
//   return <Column {...config} />;
// };
// export default DemoColumn;

type myState = {
    config : {
        title: {
            visible: boolean,
            text: string,
        },
        description: {
            visible: boolean,
            text: string,
        },
        forceFit: boolean,
        data: [
          {
            action: string,
            pv: number
          }
        ],
        padding: string,
        xField: string,
        yField: string,
        conversionTag: { visible: true },
    }
}

const ColumnChart = ({ charts }) =>{
    const config = {
      title: {
        visible: true,
        text: '基础柱状图-转化率组件',
      },
      description: {
        visible: true,
        text: '基础柱状图的图形之间添加转化率标签图形\uFF0C用户希望关注从左到右的数据变化比例',
      },
      forceFit: true,
      data: charts.chartData,
      padding: 'auto',
      xField: 'action',
      yField: 'pv',
      conversionTag: { visible: true },
  };
  console.log("config");
  console.log(config)
  return (
    <Column {...config} />
  );
}


const mapStateToProps = ({ charts })=>{
  return {
    charts
  };
}

export default connect(mapStateToProps)(ColumnChart);