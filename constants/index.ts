import { COM_1, COM_2, COM_3, CT_1, CT_2, FOOD_1, FOOD_2, OXFORD_2, SHIRT_1, SHIRT_2, SHIRT_3, SHIRT_4, SHIRT_5, SHIRT_6, SHOE_1, SHOE_2, TROUSER_1, TROUSER_2, TROUSER_3, WATCH_1, WATCH_2, WATCH_3 } from "../images";
import { StorePropsContents } from "../types";

export const TABLE_HEADERS = ["Projects Title", "Department", "Status"]

export const TABLE_BODY = [
    {
        title: "UI/UX Design",
        department: "UI Team",
        status: "Review"
    },
    {
        title: "Web development",
        department: "Frontend",
        status: "Progress",
    },
    {
        title: "Ushop app",
        department: "Mobile Team",
        status: "Pending",
    },
]

export const CUSTOMER = [
    {
        image: FOOD_1,
        name: "Lewis S. Cung",
        title: "CEO"
    },
    {
        image: FOOD_2,
        name: "Pweis B. Kung",
        title: "MD"
    },
    {
        image: FOOD_1,
        name: "Rallis P. Mung",
        title: "GCEO"
    },
    {
        image: FOOD_2,
        name: "Bung T. Nung",
        title: "COO"
    },
    {
        image: FOOD_1,
        name: "Klund G. Zung",
        title: "CMO"
    },
]

const TOP_SELLING = [
    {
        index: 0,
        amount: 1,
        itemImage: FOOD_1,
        itemName: "America Meat Pie",
        itemPrice: 708.7
    },
    {
        index: 1,
        amount: 1,
        itemImage: FOOD_2,
        itemName: "Efo riro with semo",
        itemPrice: 2000.20
    },
]

const TROUSERS = [
    {
        index: 2,
        amount: 1,
        itemImage: TROUSER_1,
        itemName: "Trousers - Blue",
        itemPrice: 53.90
    },
    {
        index: 3,
        amount: 1,
        itemImage: TROUSER_2,
        itemName: "Trousers - Blue fit",
        itemPrice: 1000.40
    },
    {
        index: 4,
        amount: 1,
        itemImage: TROUSER_3,
        itemName: "Pocket Trousers",
        itemPrice: 10.00
    },
]

const SHIRT = [
    {
        index: 5,
        amount: 1,
        itemImage: SHIRT_1,
        itemName: "Shirt - Blue Front",
        itemPrice: 68.44
    },
    {
        index: 6,
        amount: 1,
        itemImage: SHIRT_2,
        itemName: "Shirt - Blue Back",
        itemPrice: 45.98
    },
    {
        index: 7,
        amount: 1,
        itemImage: SHIRT_3,
        itemName: "Shirt - Blue Close",
        itemPrice: 77.98
    },
]

const LATEST_PRODUCT = [
    {
        index: 8,
        amount: 1,
        itemImage: SHIRT_4,
        itemName: "Shirt - Blue Front",
        itemPrice: 97.2
    },
    {
        index: 9,
        amount: 1,
        itemImage: SHIRT_5,
        itemName: "Shirt - Gray",
        itemPrice: 24.40
    },
    {
        index: 10,
        amount: 1,
        itemImage: SHIRT_6,
        itemName: "Shirt - White",
        itemPrice: 98.01
    },
    {
        index: 11,
        amount: 1,
        itemImage: WATCH_1,
        itemName: "WATCH - XII",
        itemPrice: 800.78
    },
    {
        index: 12,
        amount: 1,
        itemImage: WATCH_2,
        itemName: "WATCH - Rolex",
        itemPrice: 80.90
    },
    {
        index: 13,
        amount: 1,
        itemImage: WATCH_3,
        itemName: "WATCH - QLEVS",
        itemPrice: 100.00
    },
]

export const STORE_CONTENT = [
    {
      storeTitle: "Top selling food",
      storeItems: TOP_SELLING
    },
    {
      storeTitle: "Trousers",
      storeItems: TROUSERS
    },
    {
      storeTitle: "Shirts",
      storeItems: SHIRT
    },
    {
      storeTitle: "Latest Products",
      storeItems: LATEST_PRODUCT
    },
]

const PRODUCTS = [
    {
        index: 14,
        amount: 1,
        itemImage: SHIRT_4,
        itemName: "Shirt - Blue Front",
        itemPrice: 40.00
    },
    {
        index: 15,
        amount: 1,
        itemImage: SHIRT_5,
        itemName: "Shirt - Gray",
        itemPrice: 20.87
    },
    {
        index: 16,
        amount: 1,
        itemImage: SHIRT_6,
        itemName: "Shirt - White",
        itemPrice: 99.99
    },
    {
        index: 17,
        amount: 1,
        itemImage: WATCH_1,
        itemName: "WATCH - XII",
        itemPrice: 510
   },
    {
        index: 18,
        amount: 1,
        itemImage: WATCH_2,
        itemName: "WATCH - Rolex",
        itemPrice: 65.98
    },
    {
        index: 19,
        amount: 1,
        itemImage: WATCH_3,
        itemName: "WATCH - QLEVS",
        itemPrice: 89.6
    },
    {
        index: 20,
        amount: 1,
        itemImage: SHIRT_1,
        itemName: "Shirt - Blue Front",
        itemPrice: 400.6
    },
    {
        index: 21,
        amount: 1,
        itemImage: SHIRT_2,
        itemName: "Shirt - Blue Back",
        itemPrice: 19.66
    },
    {
        index: 22,
        amount: 1,
        itemImage: SHIRT_3,
        itemName: "Shirt - Blue Close",
        itemPrice: 14.20
    },
    {
        index: 23,
        amount: 1,
        itemImage: TROUSER_1,
        itemName: "Trousers - Blue",
        itemPrice: 18.77
    },
    {
        index: 24,
        amount: 1,
        itemImage: TROUSER_2,
        itemName: "Trousers - Blue fit",
        itemPrice: 66.90
    },
    {
        index: 25,
        amount: 1,
        itemImage: TROUSER_3,
        itemName: "Pocket Trousers",
        itemPrice: 44.79
    },
    {
        index: 26,
        amount: 1,
        itemImage: FOOD_1,
        itemName: "America Meat Pie",
        itemPrice: 501
   },
    {
        index: 27,
        amount: 1,
        itemImage: FOOD_2,
        itemName: "Efo riro with semo",
        itemPrice: 54.20
    },
    {
        index: 28,
        amount: 1,
        itemImage: OXFORD_2,
        itemName: "America Meat Pie",
        itemPrice: 1000709
    },
    {
        index: 29,
        amount: 1,
        itemImage: COM_1,
        itemName: "Efo riro with semo",
        itemPrice: 76.94
    },
    {
        index: 30,
        amount: 1,
        itemImage: COM_2,
        itemName: "America Meat Pie",
        itemPrice: 67.94
    },
    {
        index: 31,
        amount: 1,
        itemImage: COM_3,
        itemName: "Efo riro with semo",
        itemPrice: 98.97
    },
    {
        index: 32,
        amount: 1,
        itemImage: CT_1,
        itemName: "America Meat Pie",
        itemPrice: 45.04
    },
    {
        index: 33,
        amount: 1,
        itemImage: CT_2,
        itemName: "Efo riro with semo",
        itemPrice: 51.32
    },
    {
        index: 34,
        amount: 1,
        itemImage: SHOE_1,
        itemName: "America Meat Pie",
        itemPrice: 72.98
    },
    {
        index: 35,
        amount: 1,
        itemImage: SHOE_2,
        itemName: "Efo riro with semo",
        itemPrice: 840.0
    },
]

export const PRODUCT = [
    {
        storeTitle: "All Products",
        storeItems: PRODUCTS
    },
]

export const CartItems : StorePropsContents[] = []

export const TEXT = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Perspiciatis nesciunt et officiis enim porro! Maiores quisquam
voluptatibus vitae accusamus, aliquam, quos quaerat ducimus veniam
debitis placeat facilis mollitia deleniti modi. Lorem ipsum dolor
sit amet consectetur adipisicing elit. Corrupti totam odio commodi
deleniti veritatis ut hic inventore doloremque esse, eius corporis
provident delectus magnam, blanditiis ipsum quae accusantium!
Laborum, culpa? Lorem ipsum dolor sit amet, consectetur adipisicing
elit. Consequatur atque cum cupiditate quaerat. Distinctio neque
consectetur eveniet autem, iste vero architecto sunt quod quo nulla
quae magni. Recusandae, quas explicabo! Lorem ipsum dolor sit, amet
consectetur adipisicing elit. Veritatis ratione soluta sit optio
eius amet consequuntur iusto blanditiis! Nesciunt reprehenderit,
tenetur optio quae iste odit error. Quidem minima sapiente totam.`
