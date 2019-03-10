import Vue from 'vue'
import Router from 'vue-router'

import ViewIndex from '../view/index/index';
import ViewMember from '../view/member/index';
import ViewAbout from '../view/about/index';
import ViewVlab from '../view/vlab/index';
import ViewTale from '../view/tale/index';
import ViewProduct from '../view/product/index';
import ViewDetails from '../view/product/details';
import ViewPassword from '../view/member/password';
import ViewData from '../view/member/data';
import ViewOrder from '../view/member/order';
import ViewAddress from '../view/member/address';
import addressDetail from '../view/member/addressDetail';
import ViewEdit from '../view/member/edit';
import orderDetail from '../view/member/orderDetail';
import ViewJoin from '../view/join/index';
import ViewShare from '../view/share/index';
import ViewAntifake from '../view/antifake/index';
import ViewCertificate from '../view/certificate/index';
import ViewLogin from '../view/login/index';
import ViewProductOrder from '../view/product/order';

import storage from "../common/storage";

const handleBeforeEnter = (to, from, next) => {
  var token = storage.getToken();
  if (token !== '') {
    next();
  } else {
    next('/member/login');
  }
}

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [{
    path: '/',
    component: ViewIndex
  }, {
    path: '/index',
    component: ViewIndex
  }, {
    path: '/member',
    component: ViewMember,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/about',
    component: ViewAbout,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/vlab',
    component: ViewVlab,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/tale',
    component: ViewTale,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/product/list',
    component: ViewProduct,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/product/details',
    component: ViewDetails,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/member/password',
    component: ViewPassword,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/member/data',
    component: ViewData,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/order',
    component: ViewOrder,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/address',
    component: ViewAddress,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/edit',
    component: ViewEdit,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/order/detail',
    component: orderDetail,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/address/detail',
    component: addressDetail,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/join',
    component: ViewJoin,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/share',
    component: ViewShare,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/antifake',
    component: ViewAntifake,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/certificate',
    component: ViewCertificate,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/login',
    component: ViewLogin,
    // beforeEnter: handleBeforeEnter
  }, {
    path: '/product/order',
    component: ViewProductOrder,
    // beforeEnter: handleBeforeEnter
  }]
})
