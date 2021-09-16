import React from 'react'
import './orderAnalyticTable.css'
export default function RecentTable() {
    return (
        <div>
            <h2 style={{color:"blue"}}>Recent Orders</h2>
            <table className="table bg-light text-center" >
  <thead className="thead-light" style={{fontFamily:"'Poppins', sans-serif", fontSize:"19px", backgroundColor:"#cfcfcf"}}>
    <tr>
      <th scope="col">OrderID</th>
      <th scope="col">Item</th>
      <th scope="col">Supplier</th>
      <th scope="col">Status</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody style={{fontFamily:"'Poppins', sans-serif", color:"#3d3d3d"}}>
    <tr>
      <th scope="row" style={{color:"#027d75"}}>ORD-35578347</th>
      <td>Glamorous Blush flowers</td>
      <td>Gifty shop</td>
      <td><span class="Ac-pill Ac-pill--success">Completed</span></td>
      <td style={{color:"blue"}}>LKR 2000</td>
    </tr>

    <tr>
      <th scope="row" style={{color:"#027d75"}}>ORD-53264647</th>
      <td>Flora By Gucci Eau de Parfum 75ml</td>
      <td>ABC shop</td>
      <td><span class="Ac-pill Ac-pill--warning">Pending</span></td>
      <td style={{color:"blue"}}>LKR 6000</td>
    </tr>

    <tr>
      <th scope="row" style={{color:"#027d75"}}>ORD-4562347</th>
      <td>Lindt Opera Cake</td>
      <td>XYZ shop</td>
      <td><span class="Ac-pill Ac-pill--danger">Cancelled</span></td>
      <td style={{color:"blue"}}>LKR 9200</td>
    </tr>

    <tr>
      <th scope="row" style={{color:"#027d75"}}>ORD-2364640</th>
      <td>Apple Watch Series 3 Silver</td>
      <td>AMD shop</td>
      <td><span class="Ac-pill Ac-pill--warning">Pending</span></td>
      <td style={{color:"blue"}}>LKR 9000</td>
    </tr>
    
  </tbody>
</table>
<br/><br/>
        </div>
    )
}
