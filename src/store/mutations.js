export default {
    // 设置state状态
    setStateStatus(state, options) {
        for(let [key,val] of Object.entries(options)){
            let keys = key.split('.')
            if(keys.length == 2){
                state[keys[0]][keys[1]] = val
            }else{
                state[key] = val
            }
        }
    },

    // 设置列表数据
    setLists(state, options){
        let siteList = state[options.name][options.index].siteList
        if(options.type === 'push'){
            siteList.push(options.val)
        }else if(options.type === 'splice'){
            let index = siteList.findIndex(item=>{item.site_id === options.val})
            siteList.splice(index,1)
        }
    },

    // 通用push
    pushLists(state, options) {
        for(let [key,val] of Object.entries(options)){
            let keys = key.split('.')
            if(keys.length == 2){
                state[keys[0]][keys[1]].push(val)
            }else{
                state[key].push(val)
            }
        }
    },

    // 通用splice--删除
    spliceLists(state, options) {
        for(let [key,val] of Object.entries(options)){
            let keys = key.split('.')
            if(keys.length == 2){
                state[keys[0]][keys[1]].splice(val,1)
            }else{
                state[key].splice(val,1)
            }
        }
    },

    // 排序时列表设置
    setNewLists(state, options){
        state[options.name][options.index].siteList = options.val
    },

}