import React from "react";
import product from "./product";
import './price.css'
function Price(){
    return <p className="lm">price : ${product.price}</p>;
}
export default Price;