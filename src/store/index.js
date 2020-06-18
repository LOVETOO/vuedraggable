import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const state = {
    //头部
    navLists: [
      {
        name: "头部1"
      },
      {
        name: "头部2"
      },
      {
        name: "头部3"
      }
    ],
    //分类
    catLists: [
      {
        name: "分类1",
        siteList: [
          {
            name: "分类1-1"
          },
          {
            name: "分类1-2"
          },
          {
            name: "分类1-3"
          }
        ]
      },
      {
        name: "分类2",
        siteList: [
          {
            name: "分类2-1"
          },
          {
            name: "分类2-2"
          },
          {
            name: "分类2-3"
          },
          {
            name: "分类2-4"
          },
          {
            name: "分类2-5"
          }
        ]
      }
    ],

    catDragDisabled: false,//拖动域名时设置--分类sortable不可用
    catSiteDragDisabled: false,//拖动分类时设置--域名sortable不可用
    canMove:true,//是否可以拖动排序
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules,
})