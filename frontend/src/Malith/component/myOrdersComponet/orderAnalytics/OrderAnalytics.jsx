import React from 'react'
import './orderAnalytic.css'
import OrderGraph from './OrderGraph'
import RecentTable from './RecentTable'
export default function LineChart() {
    return (
        <div className="container-fluid p-0 ">
          <h3 className="text-center my-3">Order Analytics</h3>




          <div className="row px-2 py-3">
      <div className="card p-1">
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-inline-flex">
                    <h5 className="h-4 pt-2 mx-2">Duration </h5>
                    <input type="date" placeholder="" min="0" max="120000" className="ApriceRangeBox"/><b className="mt-2">-</b>
                    <input type="date" placeholder="" min="0" max="120000" className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                </div>
                <div className="d-inline-flex">
                    
  <a href="/abuyer/buyerreport" class="btn btn-warning my-2 text-white">
    Generate Report
  </a>
</div>

                
</div>

                </div>
  </div>






<div class="row mb-5">
    <div class="col-md-3">
      <div class="Acard-counter primary">
        <i class="fa fa-shopping-cart"></i>
        <span class="ANcount-numbers">LKR 12,000</span>
        <span class="ANcount-name">Total Amount</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="Acard-counter danger">
        <i class="fa fa-ticket"></i>
        <span class="Acount-numbers">75</span>
        <span class="Acount-name">All Orders</span>
        </div>
    </div>

    <div class="col-md-3">
      <div class="Acard-counter success">
        <i class="fa fa-database"></i>
        <span class="Acount-numbers">40</span>
        <span class="Acount-name">Completed Orders</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="Acard-counter info">
        <i class="fa fa-users"></i>
        <span class="Acount-numbers">35</span>
        <span class="Acount-name">Pending Orders</span>
      </div>
    </div>
    </div>
<RecentTable/>

<OrderGraph/>
          
            
        </div>
    )
}
