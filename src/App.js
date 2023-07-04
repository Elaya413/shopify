import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
function App() {
  let [cartValue,setcardValue]=useState(0)
  
  return<>
  <NavBar cartValue={cartValue}/>
 
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
               
                   
                   <Card cartValue={cartValue} setcardValue={setcardValue}/>
                   <Card cartValue={cartValue} setcardValue={setcardValue}/>
                   <Card cartValue={cartValue} setcardValue={setcardValue}/>
                  
                    </div>
                    </div>
                    </section>
  </>
  }

export default App;
function Card({ cartValue,setcardValue}){
  let[toogle,settoogle]=useState(true)
  return <div className="col mb-5">
  <div className="card h-100">
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">Special Item</h5>
              <span className="text-muted text-decoration-line-through"></span>
              $18.00
          </div>
      </div>
      <div class="bd-w-16" id="rating-feedback"></div>

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {
            toogle?<button className="btn btn-outline-dark mt-auto" onClick={()=>
          {setcardValue(cartValue+1)
          settoogle(!toogle)}
        
          
          }>
            Add to cart
            </button>
            :
            <button className="btn btn-outline-dark mt-auto" onClick={()=>
          {setcardValue(cartValue-1)
          settoogle(!toogle)}
          
          }>
          Remove
            </button>
}
            </div>
            
      </div>
  </div>
</div>
}