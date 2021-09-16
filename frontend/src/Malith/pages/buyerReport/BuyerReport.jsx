import React from 'react'
import './buyerReport.css'
import imgLogo from './images/GifteryLogoGreen.png'
import jsPDF from 'jspdf'
export default function BuyerReport() {
    const print = () =>{
        let doc = new jsPDF("p", "pt","c3");
        doc.html(document.querySelector("#AmyOrder"),{
            callback:function(pdf){
                let x;
                for(x=0; x<8; x++){
                let pageCount = doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
            }
                pdf.save("My_Order_Report.pdf")
            }
        })
    }


    return (
        <div class="page-content container my-5" style={{fontFamily:"'Roboto', sans-serif"}}>
    <div class="page-header text-blue-d2 mt-4">
        <h1 class="page-title text-secondary-d1">
            Invoice
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80 mx-2"></i>
                <b>ID: ORD-111222</b>
            </small>
        </h1>

        <div class="page-tools">
            <div class="action-buttons">
                <button class="mx-2 btn btn-success mx-1px text-95" href="#" data-title="Print" onClick={()=>print()}>
                    <i class="mx-2 fa fa-print text-light text-120 w-2"></i>
                    Print
                </button>
               

                <a class="mx-2 btn btn-danger mx-1px text-95" href="/abuyer/myorders/?cat=ordanalytic" data-title="Print">
                    <i class="mx-2 fa fa-left-arrow text-light text-120 w-2"></i>
                   Go Back
                </a>
            </div>
        </div>
    </div>
       
    <div class="container px-0">
    
        <div class="row mt-4">
        <div id="AmyOrder">
            <div class="col-12 col-lg-8 offset-lg-1">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <img src={imgLogo} className="img-fluid" style={{maxWidth:"130px"}}/>
                            <h3 style={{fontFamily:"'Poppins', sans-serif"}} className="mt-1">Giftery.com</h3>
                            <h6 style={{fontFamily:"'Poppins', sans-serif"}} className="mt-1 text-muted">A Moments of Choosing Best Gift</h6>
                        </div>
                    </div>
                </div>
     

                <hr class="row brc-default-l1 mx-n1 mb-4" />
                <br/> 
                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <span class="text-600 mb-1 text-110 text-blue align-middle">Giftery Shop</span>
                        </div>
                        <div class="text-grey-m2">
                            <div class="my-1">
                                Kandy Rd, Kadawatha
                            </div>
                            <div class="my-1">
                                Western Province, 
                                <br/>Srilanka
                            </div>
                            <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">0112-151-611</b></div>
                        </div>
                    </div>
   

                    <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">

                            <div class="my-1"><span class="text-600 mb-1 text-110 text-blue align-middle">Shalitha Bandara</span></div>
                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span>ORD-111222</div>

                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> August 25, 2021</div>

                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> Paid</div>
                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Duration:</span>August-October</div>
                        </div>
                    </div>
                    
                </div>
                <br/><br/>
                <div className="text-center text-muted">
                    <u><h5 style={{fontFamily:"'Poppins', sans-serif"}} className="text-underlined">Monthly Report</h5></u>
                </div><br/>

                <table class="table my-3 text-center">
  <thead class="thead-light" style={{backgroundColor:"#d3ddf2"}}>
    <tr>
      <th scope="col">OrderID</th>
      <th scope="col">Date</th>
      <th scope="col">Item</th>
      <th scope="col">Supplier</th>
      <th scope="col">Status</th>
      <th scope="col">Quantity</th>
      <th scope="col">Amount (LKR) </th>
    </tr>
  </thead>
  <tbody style={{backgroundColor:"#f0f2f7"}}>
    <tr>
      <th scope="row">611ff751769b6d438c8d67cc</th>
      <td>Sep 2, 2021</td>
      <td>Glamorous Blush flowers</td>
      <td>Gifty shop</td>
      <td>Paid</td>
      <td>2</td>
      <td>4 000</td>
    </tr>

    <tr>
      <th scope="row">611ff751769b6d438c8d67cc</th>
      <td>Sep 6, 2021</td>
      <td>Flora By Gucci Eau de Parfum 75ml</td>
      <td>ABC shop</td>
      <td>Paid</td>
      <td>3</td>
      <td>12 000</td>
    </tr>

    <tr>
      <th scope="row">611ff751769b6d438c8d67cc</th>
      <td>Sep 14, 2021</td>
      <td>Lindt Opera Cake</td>
      <td>XYZ shop</td>
      <td>Cancel</td>
      <td>4</td>
      <td>10 000</td>
    </tr>

    <tr>
      <th scope="row">611ff751769b6d438c8d67cc</th>
      <td>Sep 21, 2021</td>
      <td>Apple Watch Series 3 Silver</td>
      <td>AMD shop</td>
      <td>Cancel</td>
      <td>4</td>
      <td>30 000</td>
    </tr>
    
  </tbody>
</table>


                

                    <div class="row mt-4">
                        <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>
                        
                        <div class="col-12 col-sm-5 mt-4 text-grey text-90 order-first order-sm-last">
                            <div class="row my-2">
                            
                                <div class="col-7 text-right">
                                    SubTotal
                                </div>
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">LKR 56,000</span>
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    Cancelled (Return)
                                </div>
                                <div class="col-5">
                                    <span class="text-110 text-secondary-d1">LKR 40,000</span>
                                </div>
                            </div>

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total Amount
                                </div>
                                <div class="col-5">
                                    <span class="text-120 text-success-d3 opacity-2">LKR 16,000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <span class="text-secondary-d1 text-105">Thank you for your business</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}
