import React from 'react';
import Product from './Product';
const ProductList = (props) => {
const products = [{
name: "iPhone",
price: "100000",
imageUrl: "https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
},
{
name: "Samsung",
price: "40000",
imageUrl: "https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
},
{
name: "Nokia",
price: "40000",
imageUrl: "https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"
}
];
const handleClick=(data)=>{
console.log("I clicked");
props.handleClick(data);
}
return <div className="row">
{products.map((item,index)=>{
return <Product productDetails={item}
handleClick={handleClick}/>
})}
</div>
}
export default ProductList;