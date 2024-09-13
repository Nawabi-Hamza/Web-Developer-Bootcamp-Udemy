const shoppingCart = [
    { id: 1, product: 'HDMI Cable', price: 10.99 },
    { id: 2, product: 'Easy Bake Oven', price: 5.99 },
    { id: 3, product: 'Peach Pie', price: 7.99 }, 
    { id: 4, product: 'Smart Tv', price: 12.99 },
    
];


[...shoppingCart,{ id: 5, product: 'Web Cam', price: 8.99 }];


shoppingCart.filter(item => item.id !== 2)

shoppingCart.map((item)=>{
    return{
        ...item,
        product:item.product.toLowerCase()
    }
})