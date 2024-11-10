import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
  {
    id: "Grt223",
    name: "PIZZA",
    description: "Pizza hecha con muzzarella",
    price: 400,
    stock: 1,
    image: "/img/remera-h.jpg",
    category: "pizza"
  },
  {
    id: "Grt224",
    name: "Pizza peperoni",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 420,
    stock: 5,
    image: "/img/remera-m.jpg",
    category: "pizza"
  },
  {
    id: "Hff556",
    name: "Fideos Carbonara",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 720,
    stock: 5,
    image: "/img/pantalon-h.jpg",
    category: "pastas"
  },
  {
    id: "Hff557",
    name: "Fideos al Pestos",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 620,
    stock: 17,
    image: "/img/pantalon-m.jpg",
    category: "pastas"
  },
  {
    id: "Wre442",
    name: "Ojo de Bife",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 800,
    stock: 2,
    image: "/img/zapatillas-m.jpg",
    category: "carne"
  },
  {
    id: "Wre443",
    name: "Vacio",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
    price: 820,
    stock: 6,
    image: "/img/zapatillas-h.jpg",
    category: "carne"
  },
]

const seedProducts = () => {
  const productsRef = collection(db, "products")
  products.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts()