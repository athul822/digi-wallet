import React from 'react'
import BankCard from '../BankCard/BankCard'
import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'

const CardStack = () => {
   
  return (
    <div>
        <BankCard color={{ color1: "#1A7579", color2: "#151515" }} header={"DEBIT CARD"} popUp debitCard/>
    </div>
  )
}

export default CardStack