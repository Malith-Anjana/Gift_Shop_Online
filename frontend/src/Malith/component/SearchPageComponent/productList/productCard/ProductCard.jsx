import axios from 'axios';
import React, { useState } from 'react'
import './productCard.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function ProductCard({proc}) {
  const [currentuser, setCurrentUser] = useState("Anjana");
  

  const insertWishItems = async (proc) => {
   const newWishlistItem = {
      category:proc.category,
      brand:proc.brand,
      productName:proc.productName,
      pricePItem:proc.pricePItem,
      wholesalePrice:proc.wholesalePrice,
      imageURL:proc.imageURL,
      currentuser,
      productId:proc._id,
      description:proc.description,
      supplier:proc.supplier,
    };


    await axios.post("/awishlist/addwishlistitem", newWishlistItem).then((res)=>{
      if(res.data==="Already Added"){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Item already in the Wishlist',
          showConfirmButton: false,
          timer: 1200
        })
        window.location.reload();
      }

      else{
      // //  window.location.replace("/post/"+ res.data._id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item saved',
        showConfirmButton: false,
        timer: 1100
      });
    }
    })
    
      .catch ((error)=> {
      alert(error);
    })

    
  };

      return (
          <div className="col-lg-3 mt-2">


          <div className="card">
              <div className="card-body">
                  <div className="card-img-actions"> <img src={proc.imageURL} className="card-img img-fluid" width="96" height="350" alt=""/> </div>
              </div>
              <div className="card-body bg-light text-center">
                  <div className="mb-2 AproductCardHeader">
                      <h6 className="font-weight-semibold mb-2"> <Link to={`/product/${proc._id}`} className="text-default mb-2" data-abc="true">{proc.productName}</Link> </h6> <a href={`/abuyer/search/?cat=${proc.category}`} className="text-muted" data-abc="true">{proc.category}</a>
                  </div>
                  <h4 className="mb-0 font-weight-bold" style={{color:"black"}}>LKR {proc.wholesalePrice}</h4><span className="Astrike-text">LKR {proc.pricePItem}</span>
                  <div className="text-muted mb-3">{proc.brand}</div> 
                  <div className="d-flex justify-content-around"><i className="fas fa-shopping-cart AproductIcons AproductCartIcons"></i><a onClick={()=>{insertWishItems(proc);}}><i className="fas fa-heart AproductIcons AproductHeartIcons"></i></a></div>
              </div>
          </div>
      </div>
        )
    }

