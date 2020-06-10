import { Reducer, Effects, Subscription } from 'umi';
import { getRemoteList } from './service';

interface UserModelType{
  namespace: 'users';
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

const UserModel: UserModelType = {

  namespace: 'users',
  state: {}, //仓库初始值
  reducers: {
   getList: (state, {payload}) =>{
    return payload;
   }
  },
  effects: {
    *getRemote(action, {put, call}) {
      const data = yield call(getRemoteList);
      console.log(data);
      yield put({
        type: 'getList',
        payload: data
      });
    }
  },

  subscriptions: {
    setup({ dispatch, history}, done) {
      return history.listen(({pathname}, action) => {
        if(pathname === '/users'){
          dispatch({
            type: 'getRemote',
          });
        }
      })
    }
  }

};

export default UserModel;