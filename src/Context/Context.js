import React, { createContext , useContext, useReducer } from 'react'
import contextReducer from './Reducers'

const Context = ({children}) => {

    const [ state , dispatch ] = useReducer(contextReducer,{
        userData : [],
        userDataPermenent : []
    })

  return (
    <TransactionData.Provider value={{state , dispatch}}>
        {children}
    </TransactionData.Provider>
  )
}

export default Context


const TransactionData = createContext()

export const TransactionDataState = () =>{
    return useContext(TransactionData)
}