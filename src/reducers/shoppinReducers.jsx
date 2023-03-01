import image from '../assets/foto1.png'
import image2 from '../assets/foto2.png'
import image3 from '../assets/foto3.png'
import image4 from '../assets/foto4.png'
import styles from '../App.module.css'
import { TYPES } from '../actions/ShoppingActions'
export const shoppingInitialState={
    products:[
        {
            id:1,
            img:image,
            title: "Tourmaline & Eucaliptus Bar Soap",
            precio: 12.00,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
          {
            id:2,
            img: image2,
            title: "Tourmaline & Argan Oil Bar Soap",
            precio: 12.00,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
          {
            id:3,
            img:image3,
            title: "Tourmaline & Tea Tree Bar Soap",
            precio: 12,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
          {
            id:4,
            img: image4,
            title: "Tourmaline & Unscented Bar Soap",
            precio: 12,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
          {
            id:5,
            img: image,
            title: "Tourmaline & Tea Tree Bar Soap",
            precio: 12,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
          {
            id:6,
            img:image2,
            title: "Tourmaline & UUnscented Bar Soap",
            precio: 12,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
          {
            id:7,
            img: image3,
            title: "Tourmaline & Eucaliptus Bar Soap",
            precio: 12,
            caracteristicas:
              "Recharge your skin with  the super energizing power of finely crushed tourmaline powder blended with natural complexion",
          },
    ],
    cart:[]
}
export function shoppingReducer(state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
          let newItem = state.products.find(product => product.id === action.payload)
          let itemInCart = state.cart.find(item => item.id === newItem.id)
        
            return itemInCart 
            ? 
            {...state, cart:state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1}: item)}
            :{ ...state,
            cart:[...state.cart,{...newItem,quantity:1}]}
          
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemtoDelete = state.cart.find((item) =>item.id ===action.payload)
            return itemtoDelete > 1 
            ? {
              ...state, 
              cart: state.cart.map((item )=> item.id  === action.payload  ? {...item ,quantity: quantity -1} : item)
            } 
            :{

              ...state,
              cart: state.cart.filter((item)=>item.id !==action.payload)
            }
        }
        case  TYPES.REMOVE_ALL_FROM_CART:{
            return  {
              ...state,
              cart: state.cart.filter((item)=>item.id !==action.payload)
            }
        }
        case TYPES.CLEAR_CART:{
          return shoppingInitialState
        }
            break;
    
        default:
            return state;
    }
}