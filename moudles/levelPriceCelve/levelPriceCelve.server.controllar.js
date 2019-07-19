import levelPriceCelveModel from './levelPriceCelve.server.service'
import mongoose from 'mongoose'
import {levelPriceCelveApis} from './levelPriceCelve.server.api'
import usersControl from '../users/user.server.controllar'

// const levelPriceCelveModel = mongoose.model('levelPriceCelve')

const levelPriceCelveControl={
    getAll:async (userName,options)=>{
        try{
          const allCelves = await levelPriceCelveModel.find()
            return allCelves
        }catch (e) {
            console.error(e)
        }
    },
    getAllRunning:async ()=>{
        try{
            const allRunningCelves = await levelPriceCelveModel.find({state: 1})
            return allRunningCelves
        }catch (e) {
            console.error(e)
        }
    },
    updateCelve: async (id,params) =>{
        try{
            const res = await levelPriceCelveModel.update({_id: id},params)
            return res
        }catch (e) {
            console.error(e)
        }
    },
    stopCelve: async (id,params) =>{
        try{
            const res = await levelPriceCelveModel.update({_id: id},{state:0})
            return res
        }catch (e) {
            console.error(e)
        }
    },
    insertCelve: async (options)=> {
        try {
            console.log('insertCelve',JSON.stringify(options))
            const newCelve = new levelPriceCelveModel(options)
            newCelve.save()
            // const res = await levelPriceCelveModel.create(options)
            // return res
        } catch (e) {
            console.error(e)
        }
    },
    removeCelve:async (id)=> {
        try {
            const res = await levelPriceCelveModel.remove({_id:id})
            return res
        } catch (e) {
            console.error(e)
        }
    },
}

export default  levelPriceCelveControl
