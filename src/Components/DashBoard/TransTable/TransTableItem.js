import React from 'react'
import CostAndTrend from '../CostAndTrend/CostAndTrend'
import DateView from '../DateView/DateView'
import StatusView from '../StatusView/StatusView'
import TransTableProfile from './TransTableProfile'


const TransTableItem = ({user}) => {
 //console.log(user);
 Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

  return (
    <div className='trans-table-item-container'>
        <TransTableProfile name={user.username} mail={user.email} />
        <CostAndTrend costAmount={user.cost} trend={['', 'true'].random()} />
        <StatusView progress={user.progress} />
        <DateView date={user.date} />
    </div>
  )
}

export default TransTableItem