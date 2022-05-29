import React from 'react'
import CostAndTrend from '../CostAndTrend/CostAndTrend'
import DateView from '../DateView/DateView'
import StatusView from '../StatusView/StatusView'
import TransTableProfile from './TransTableProfile'

const TransTableItem = () => {
 
  return (
    <div className='trans-table-item-container'>
        <TransTableProfile />
        <CostAndTrend cost={238} trend={true} />
        <StatusView progress={'Sent'} />
        <DateView date={"2019-01-17 10:34:23"} />
    </div>
  )
}

export default TransTableItem