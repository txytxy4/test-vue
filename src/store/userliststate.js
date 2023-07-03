import {defineStore} from 'pinia'
export const userlistStore = defineStore('tableData',{
    state: () =>([{
        date:String,
        name:String,
        address:String
}]),
    getters:{},
    actions:{}
}) 