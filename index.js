
console.log("hello")
let allplants=[]
const url = "https://openapi.programming-hero.com/api/plants"
const cartfetch =() => {
    fetch(url).then(res => res.json()).then(data =>{
        allplants= data.plants 
        cartload(allplants)})
        
}


let cartload =(plants)=>{
    const allcartId = document.getElementById("cart")
   plants.forEach( plant=> {
    const div = document.createElement("div")
    div.innerHTML = `<div class="p-5 bg-white rounded space-y-3 w-full h-full shadow-lg "> <img src="${plant.image}" alt="" class="object-cover w-full h-40">
                        <h1 class="font-bold ">${plant.name}</h1>
                        <p class=" text-gray-600 ">${plant.description}</p>
                      <div class="flex justify-between">
                        <button class="btn rounded-3xl bg-[#f0fdf4] text-[#15803d] border-0">${plant.category}</button>
                         <h1 class="font-bold">৳${plant.price}</h1></div>
                    <button class="btn rounded-3xl bg-[#15803d] text-[#ffffff] border-0 w-full">Add to Cart</button>
                  </div>
`
     allcartId.appendChild(div);
   });   
}

 
const url2 = "https://openapi.programming-hero.com/api/categories"
const categoriesfetch =() => {
    fetch(url2).then(res => res.json()).then(data => categoriesload(data.categories))
}

const categoriesload =(categories)=>{
    //console.log(categories)
    
    const allcategoriesId = document.getElementById("categoris")
   categories.forEach( category=> {
    const button = document.createElement("button")
    
    button.innerHTML = `<button class="  text-left button hover:bg-[#15803d] hover:text-[white]
     bg-[#f0fdf4] border-0 p-2 rounded w-full" id="${category.id}">${category.category_name}</button>`
     
     button.addEventListener("click",()=>hover(category.id))
     allcategoriesId.appendChild(button);
   });   
}

const hover =(id)=> {
             document.querySelectorAll("button").forEach(btn=> {
                btn.classList.remove("buttonHober")
                
             });
             document.getElementById(id).classList.add("buttonHober")
        let categoryName = document.getElementById(id).innerText;
       document.getElementById("cart").innerHTML = "";

        let filtered = allplants.filter(filter =>filter.category === categoryName)
        cartload(filtered)
             
}

categoriesfetch()
cartfetch()