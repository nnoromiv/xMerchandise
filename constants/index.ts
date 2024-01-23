import { FOOD_1, FOOD_2, SHIRT_1, SHIRT_2, SHIRT_3, SHIRT_4, SHIRT_5, SHIRT_6, TROUSER_1, TROUSER_2, TROUSER_3, WATCH_1, WATCH_2, WATCH_3 } from "../images";

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
        itemImage: FOOD_1,
        itemName: "America Meat Pie",
        itemPrice: "50.00"
    },
    {
        itemImage: FOOD_2,
        itemName: "Efo riro with semo",
        itemPrice: "50.00"
    },
]

const TROUSERS = [
    {
        itemImage: TROUSER_1,
        itemName: "Trousers - Blue",
        itemPrice: "50.00"
    },
    {
        itemImage: TROUSER_2,
        itemName: "Trousers - Blue fit",
        itemPrice: "50.00"
    },
    {
        itemImage: TROUSER_3,
        itemName: "Pocket Trousers",
        itemPrice: "50.00"
    },
]

const SHIRT = [
    {
        itemImage: SHIRT_1,
        itemName: "Shirt - Blue Front",
        itemPrice: "50.00"
    },
    {
        itemImage: SHIRT_2,
        itemName: "Shirt - Blue Back",
        itemPrice: "50.00"
    },
    {
        itemImage: SHIRT_3,
        itemName: "Shirt - Blue Close",
        itemPrice: "50.00"
    },
]

const LATEST_PRODUCT = [
    {
        itemImage: SHIRT_4,
        itemName: "Shirt - Blue Front",
        itemPrice: "50.00"
    },
    {
        itemImage: SHIRT_5,
        itemName: "Shirt - Gray",
        itemPrice: "50.00"
    },
    {
        itemImage: SHIRT_6,
        itemName: "Shirt - White",
        itemPrice: "50.00"
    },
    {
        itemImage: WATCH_1,
        itemName: "WATCH - XII",
        itemPrice: "50.00"
    },
    {
        itemImage: WATCH_2,
        itemName: "WATCH - Rolex",
        itemPrice: "50.00"
    },
    {
        itemImage: WATCH_3,
        itemName: "WATCH - QLEVS",
        itemPrice: "50.00"
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