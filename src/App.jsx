import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import CartCard from './Components/CartCard'


export const UserContext = React.createContext()

function App() {
  
    const [product, setProduct] = useState([
        {
          "id": 1,
          "title": "i Phone 9",
          "description": "Apple  An apple mobile which is nothing like apple",
          "price": 599,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock":94,
          "brand":"Apple",
          "category":"smartphones",
          "image": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.slideshow-large_2x.jpg",
          },
          {
            "id": 3,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display",
            "price": 999,
            "discountPercentage": 11.96,
            "rating": 4.1,
            "stock":44,
            "brand":"Apple",
            "category":"smartphones",
            "image": "https://www.pngall.com/wp-content/uploads/4/Realme-PNG.png"
            },
          {
            "id": 2,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1299,
            "discountPercentage": 10.34,
            "rating": 4.2,
            "stock":44,
            "brand":"Samsung",
            "category":"smartphones",
            "image": "https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-f721blbamea/gallery/sa-en-galaxy-z-flip4-f721-sm-f721blbamea-534249729?$330_330_JPG$"
            },
            {
              "id": 4,
              "title": "OnePlus 12R",
              "description": "The OnePlus 12R showcases a daring design featuring",
              "price": 399,
              "discountPercentage": 13.44,
              "rating": 4.2,
              "stock":44,
              "brand":"One plus",
              "category":"smartphones",
              "image": "https://www.runbazaar.com/_next/image/?url=https%3A%2F%2Fapi.runbazaar.com%2Fmedia%2F__sized__%2Fproduct_img%2F2022%2F11%2F11%2FRBIwuj75n1h7k81%2F51LLrop8UgL._AC_SX425_-smart_crop-c0-5__0-5-750x750-70.jpg&w=384&q=75",
              },
              {
                "id": 5,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 699,
                "discountPercentage": 11.44,
                "rating": 333,
                "stock":44,
                "brand":"fastrack",
                "category":"smartphones",
                "image": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/03/redmi10-hero.png?q=50&fit=crop&w=1100&h=618&dpr=1.5"
                }
    ])


  return <>
    <UserContext.Provider value={{product, setProduct}}>

        <div>
        <Navbar/>
        <CartCard/>
        </div>

    </UserContext.Provider> 
  </>
}

export default App
