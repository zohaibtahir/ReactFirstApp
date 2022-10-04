export default function MapingList(){

    // const products = ['Apple', 'Banana', 'Mango', 'Grapes'];
    // const products = [
    //     {id:1, name:'Laptop', price: '$500'},
    //     {id:2, name:'Mobile', price: '$200'},
    //     {id:3, name:'TV', price: '$400'},
    // ]

    // const productlist = products.map((product)=>(<h3 key={product.id}>{product.name} : {product.price}</h3>))

    const Fruits = ["Mango", "Apple", "Grapes"];
    const Fruitslist = Fruits.map((fruit,index)=>(<h3 key={index}>{fruit}</h3>))
   
    return <div>{Fruitslist}</div>
    

}