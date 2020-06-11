import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList } from './service'
interface chartModelType{
    namespace: 'charts';
    state: {};
    reducers: {
      getList: Reducer;
    };
    effects: {
      getRemote: Effect;
    };
    subscriptions: {
      setup: Subscription;
    };
  }
  
const ChartModel: chartModelType = {
  
    namespace: 'charts',
    state: {}, //仓库初始值
    reducers: {
     getList: (state, {payload}) =>{
      return payload;
     }
    },
    effects: {
      *getRemote(action, {put, call}) {
        const data = yield call(getRemoteList);
        yield put({
          type: 'getList',
          payload: data
        });
      }
    },
  
    subscriptions: {
      setup({ dispatch, history}, done) {
        return history.listen(({pathname}, action) => {
          if(pathname === '/g2plot'){
            dispatch({
              type: 'getRemote',
            });
          }
        })
      }
    }
  
  };
  
  export default ChartModel;