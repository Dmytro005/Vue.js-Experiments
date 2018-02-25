import User from './components/user/User.vue';
import Home from './components/Home.vue';

const UserStart = resolve =>{
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  })
}
const UserDetail = resolve =>{
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  })
}
const UserEdit = resolve =>{
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  })
}

const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        component: UserStart,
      },
      {
        path: ':id',
        component: UserDetail,
      },
      {
        path: ':id/edit',
        name: 'userEdit',
        component: UserEdit,
      }
    ],
  },
  {
    path: '*',
    redirect: '/',
  }
];

export default routes;