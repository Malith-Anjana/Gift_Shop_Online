import CatSidebar from '../../component/SearchPageComponent/ctegorySidebar/CatSidebar'
import Topbar from '../../component/LandingPageComponent/topbar/Topbar'
import ProductCardGrp from '../../component/SearchPageComponent/productList/productListGrp/ProductCardGrp'
import Footer from '../../component/LandingPageComponent/footer/Footer'
import Topcard from '../../component/SearchPageComponent/pricAndSortCard/Topcard'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios' 
export default function SearchPage() {
    const [products, setProducts] = useState([]);
    const [status, setStaus] = useState(false);
    const [pUpper, setPupper] = useState("");
    const [pLower, setPlower] = useState("");
    const {search} = useLocation();


    useEffect(() => {
        document.body.style.backgroundColor = "#e8e8e8"
        const fetchProducts = async () =>{


            const res = await axios.post("/abuyer/getallitems" + search);
            setProducts(res.data)
        }
        fetchProducts();

    }, [search])

    const productsProp=(data)=>{
      setProducts(data);
      setStaus(true);
    }
    



    const handleChange=async (e)=>{
        setPupper( e.Current.value);
        console.log(pUpper)
        const price = `${search}?pLower=3000&pUpper=5000`
        const res = await axios.post("/abuyer/getallitems" + price);
        setProducts(res.data)
            
        
    }

        return (
            <>
            <Topbar prodProp={productsProp}/>
            <div class="container-fluid p-4 mt-50 mb-50" style={{fontFamily:"'Poppins', sans-serif"}}>
       
            

    <div class="row">

    <div class="col-sm-3 col-lg-2">
        
        <CatSidebar/>

    </div>






  <div class="col-sm-9 col-lg-10 p-4" >

     
     



  <div className="row px-2">
      <div className="card">
        <div className="card-body">
          {products.length && status &&<h5 className="mt-2 text-warning">Showing {products.length} resualts found...</h5>}
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-inline-flex">
                    <p className="h-5 pt-2 mx-2">Price Range </p>
                    <input type="number" placeholder="min" min="0" max="120000" name="pUpper" onChange={handleChange} value={pUpper} className="ApriceRangeBox"/><b className="mt-2">-</b>
                    <input type="number" placeholder="max" min="0" max="120000" name= "pLower" onChange={handleChange} value={pLower} className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                </div>
            

                <div className="d-inline-flex">
                    <div><p className="h-5 mx-2 mt-3">Sort By</p></div>
                    <div class="btn-group p-2 dropleft">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Date
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div></div>
</div>

                </div>
  </div>
  </div>










       <ProductCardGrp products={products}/>
      
        
        </div>
  
        
       
</div>
</div>

<Footer/>
</>
        )
    }
