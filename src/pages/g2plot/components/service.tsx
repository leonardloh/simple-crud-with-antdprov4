import { request } from 'umi';

export const getRemoteList = async (params) =>{
    // return request('http://public-api-v1.aspirantzhang.com/users', {
    //     method: 'get',
    //   })
    //     .then(function(response) {
    //       return response;
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    const data = {
        chartData: [
            {
              action: '浏览网站',
              pv: 50000,
            },
            {
              action: '放入购物车',
              pv: 35000,
            },
            {
              action: '生成订单',
              pv: 25000,
            },
            {
              action: '支付订单',
              pv: 15000,
            },
            {
              action: '完成交易',
              pv: 8500,
            },
          ]
    }
    return data;
}