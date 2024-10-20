import { createContext, useState } from "react";


export const itemsContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",
      name: "Harvest Gold - White Bread",
      weight: "350g",
      price: 28,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
      color: {colorName: "red"}
    },


    {
      id: 2,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d037337-0ca2-463c-9f98-a6cba298d7a5.jpg?ts=1707312317",
      name: "Mother Dairy Paneer",
      weight: "200g",
      price: 90,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 3,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/99407a.jpg?ts=1688443217",
      name: "Amul Masti Curd",
      weight: "1kg",
      price: 75,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 4,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
      name: "Amul Pure Milk Cheese Slices",
      weight: "200g",
      price: 141,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 5,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315",
      name: "Amul Salted Butter",
      weight: "500g",
      price: 285,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 6,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3229ef67-1d89-4dc4-8beb-cdbe41e49f89.jpg?ts=1723099181",
      name: "Table White Eggs (6 pieces)",
      weight: "6 pieces",
      price: 53,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 7,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      name: "Amul Gold Full Cream Fresh Milk",
      weight: "500 ml",
      price: 34,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 8,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
      name: "Mother Dairy Classic Curd",
      weight: "400 g",
      price: 35,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 9,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/439697a.jpg?ts=1688471557",
      name: "Amul Blend Diced Cheese",
      weight: "200 g",
      price: 125,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 10,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d48ef3c-4323-40ec-8f90-a84add8382bb.jpg?ts=1708953276",
      name: "Nestle Milkmaid Sweetened Condensed",
      weight: "380 g",
      price: 147,
      category: "Dairy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 11,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/78e0ab78-92de-46ac-9174-5a24094a2e37.jpg?ts=1719209405",
      name: "Vicks Cough Tablets - Warming Ginger",
      weight: "1 pack (25 pieces)",
      price: 50,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 12,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
      name: "Honitus Cough Syrup",
      weight: "100 ml",
      price: 113,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 13,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9ebe10d3-9014-4b03-afb8-2234a3075fca.jpg?ts=1721413551",
      name: "Himalaya Koflet Cough Syrup",
      weight: "110 ml",
      price: 99,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 14,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/379653a.jpg?ts=1680513220",
      name: "Vicks BabyRub Chest rubs & balms",
      weight: "25 ml",
      price: 125,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 15,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534419a.jpg",
      name: "Vicks VapoRub Steam Pods",
      weight: "4 capsules",
      price: 92,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 16,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/477875a.jpg?ts=1690814372",
      name: "Crocin Advance Tablets",
      weight: "20 units",
      price: 19,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 17,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/531513a.jpg",
      name: "Volini Activ Pain Relieving Gel",
      weight: "50 g",
      price: 152,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 18,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4d226231-9581-4349-a1c9-7edf59cbe215.jpg?ts=1708589142",
      name: "Moov Instant Pain Relief Spray",
      weight: "80 g",
      price: 270,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 19,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/364001a.jpg?ts=1688482715",
      name: "Itch Guard Antifungal Cream",
      weight: "20 g",
      price: 117,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 20,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/479065a.jpg?ts=1690813840",
      name: "Betadine Gargle Antiseptic Liquid",
      weight: "100 ml",
      price: 304,
      category: "Pharmacy",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 21,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/57b8d9f7-1790-4448-a207-59e63374c1a4.jpg?ts=1724241935",
      name: "Pedigree Adult Dog Food",
      weight: "3 kg",
      price: 687,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 22,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/adaddc43-ef95-4b67-918f-581fc77dae1a.jpg?ts=1723375826",
      name: "Pedigree Adult Dog Wet Food -Chicken & Liver",
      weight: "70 g",
      price: 50,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 23,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e1e71f49-1cf1-4ee7-a49d-e6652122b60e.jpg?ts=1716992077",
      name: "HUFT Sara's Wholesome Classic Chicken & Brown",
      weight: "100 g",
      price: 95,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 24,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1ff54997-192a-4c47-815a-567ca24ef7fd.jpg?ts=1723376338",
      name: "Kennel Kitchen Chicken Recipe with Pumpkin",
      weight: "100 g",
      price: 67,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 25,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ce034542-38da-4964-a614-e1bb04e043de.jpg?ts=1723380150",
      name: "Pedigree PRO Adult Small Breed Dog Food",
      weight: "3 kg",
      price: 1116,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 26,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0d4db7bb-1617-42ed-96c8-6afbeeef1e84.jpg",
      name: "HUFT Sara's Wholesome Grain-Free Chicken",
      weight: "100 g",
      price: 119,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 27,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e2ec4319-6348-418d-bb2e-412d13bbee07.jpg?ts=1723380022",
      name: "Chappi Chicken And Rice Adult Dog Food",
      weight: "2.8 kg",
      price: 470,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 28,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3ab18148-d966-4a59-899a-8579ec9df6ce.jpg?ts=1723376342",
      name: "Kennel Kitchen Fish Recipe with Pumpkin",
      weight: "100 g",
      price: 67,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 29,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/10b42f93-e28b-4e0d-96e2-3782f0da005b.jpg?ts=1723374778",
      name: "Royal Canin Labrador Retriever Dry Food",
      weight: "3 kg",
      price: 2655,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 30,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5e78a5d2-530f-42e8-8104-ae32eb56136f.jpg?ts=1708593183",
      name: "Drools Absolute Calcium Bone Dog Supplement",
      weight: "600 g",
      price: 450,
      category: "Pet Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 31,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/84cba105-0dc1-424e-90ec-f5f97a1b5bfb.jpg?ts=1712733539",
      name: "Nestle Lactogen Pro 1 Infant Formula",
      weight: "400 g",
      price: 485,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 32,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/dd67f6cd-8002-4604-a96d-c5685e570add.jpg?ts=1719830421",
      name: "Slurrp Farm Cereal (Ragi, Rice & Mango)",
      weight: "200 g",
      price: 349,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 33,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/833aa368-9787-4cd2-b1a5-4fc17c0c6f6c.jpg?ts=1712733552",
      name: "Aptamil Gold Stage 1 Infant Formula",
      weight: "400 g",
      price: 975,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 34,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e5053d5c-895b-4388-b2dd-4e0927ae86ab.jpg?ts=1712734876",
      name: "Nestle Cerelac 5 Grains & Fruits Baby Cereal",
      weight: "300 g",
      price: 339,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 35,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11357a.jpg?ts=1707463965",
      name: "Johnson's Blossoms Baby Powder",
      weight: "200 g",
      price: 228,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 36,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/406214a.jpg?ts=1687439064",
      name: "Himalaya Khus Khus Baby Powder",
      weight: "700 g",
      price: 396,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 37,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/424427a.jpg?ts=1687328711",
      name: "Mamaearth Natural Mosquito Repellent Patch",
      weight: "24 units",
      price: 275,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 38,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/025dec31-77d8-4783-adc1-1c1f0386d0d3.jpg?ts=1706166664",
      name: "Mother Sparsh 98% Pure Water Baby Wipes",
      weight: "1 pack (80 pulls)",
      price: 138,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 39,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/380185a.jpg?ts=1690813893",
      name: "Himalaya Gentle Baby Soap - Buy 3 Get 1 Free",
      weight: "4 x 75 g",
      price: 157,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },

    {
      id: 40,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/085ce1ee-3c7e-451d-b60b-93208e3bd668.jpg?ts=1722236318",
      name: "Pampers All Round Protection Diaper",
      weight: "1 pack (42 pieces)",
      price: 962,
      category: "Baby Care",
      isAdded: false,
      isVisible: false,
      quantity: 1,
    },
  ])


return(
  <itemsContext.Provider value={{ products, setProducts }}>
  {children}
</itemsContext.Provider>
)

}

export default ProductContext;