import React, { useEffect } from "react";
import Logo from "./GifteryLogo.png";
import "./topbar.css";
import {Redirect, useLocation} from 'react-router-dom'
import {useState } from 'react'
import axios from 'axios' 

export default function Topbar(props) {
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [status, setStaus] = useState(false);
  const [wishlistLength, setwishlistLength] = useState("");
  const {search} = useLocation();

useEffect(() => {
  const fetchWishlist = async () =>{
    const res = await axios.get("/awishlist/getwishlistitem");
       setwishlistLength(res.data.data.length);
  }
  fetchWishlist();   
}, [])



  const handleChange=(e)=>{
    setSearchKeyword(e.currentTarget.value);
    
}

  const handleSearchArea=(e)=>{
    e.preventDefault();
    axios.post("/abuyer/getallitems" + search).then((res)=>{
        if (res.data) {
            
          const result = res.data.filter(
            (product) =>
             product.productName.toLowerCase().includes(searchKeyword)
          );
          
         if(result) 
         {setStaus(true);}

         props.prodProp(result)
          }
          
          

    });
  }



  return (
    <div className="Aheader my-0 sticky-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12">
            <div className="py-3">
              <a href="/"><img src={Logo} alt="" style={{ maxWidth: "90px" }} /></a>
            </div>
          </div>
          
          <div className="col-md-6 col-12 text-center">
          <form className="d-flex mt-3"style={{maxWidth:"600px"}} onSubmit={handleSearchArea}>
        <input className="form-control" type="search" value={searchKeyword} onChange={handleChange}  placeholder="Search" aria-label="Search"/> 
        <button type="submit" className="btn btn-dark" type="submit">Search</button>
      </form>
          </div>

          <div className="col-md-3 col-12 text-right">
            {/* <p className="my-md-4 Aheader-links">
              <a href="#" className="px-2">
                <i class="fas fa-sign-in-alt pr-2"></i>Sign In
              </a>
              <a href="#" className="px-2">
                |
              </a>
              <a href="#" className="px-2">
                Create an Account<i class="fas fa-user-plus pl-2"></i>
              </a>
            </p> */}
            <div className="mt-3">
            <a href="#" className="AtopCart">
                
            <i className="fas fa-shopping-cart AhoverTop my-2 Anavicon" style={{fontSize:"25px"}}></i> 
                   <span
                    className="position-absolute badge rounded-pill bg-warning mb-2"
                    style={{ fontSize: "0.9em" }}
                  >
                    0
                  </span>
                  
            </a>

            <a href="/abuyer/wishlist" className="AtopCart">
                
            <i className="fas fa-heart AhoverTop  Anavicon" style={{fontSize:"25px", marginLeft:"30px"}}></i> 
            <span
                    className="position-absolute badge rounded-pill bg-danger mb-2"
                    style={{ fontSize: "0.9em" }}
                  >
                    {wishlistLength}
                  </span>
                  
            </a>


            

            <a href="#" className="Adropdown AtopUser">
                
            <i className="fas fa-user AhoverTop my-1 Anavicon Adropbtn" style={{fontSize:"25px"}}></i> 
            <div class="Adropdown-content" style={{fontFamily:"'Poppins', sans-serif"}}>
                <a href="/abuyer/wishlist"><i class="fas fa-heart px-2"></i>Wishlist</a>
                <a href="/abuyer/myorders"><i class="far fa-list-alt px-2"></i>My Orders</a>
                <a href="#"><i class="fas fa-user-circle px-2"></i>Profile</a>
                </div>
            </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}