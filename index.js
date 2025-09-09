
console.log("hello")
let allplants=[]
const url = "https://openapi.programming-hero.com/api/plants"
const cartfetch =() => {
   loader(true)
    fetch(url).then(res => res.json()).then(data =>{
        allplants= data.plants 
        cartload(allplants)
        loader(false) 
      }) 
         
        
      }

let cartload =(plants)=>{
    
    const allcartId = document.getElementById("cart")
   plants.forEach( plant=> {
    const div = document.createElement("div")
    div.innerHTML = `<div class="p-2 bg-white rounded space-y-3 w-full h-full shadow-lg "> <img src="${plant.image}" alt="" class="object-cover w-full h-40">
                        <h1 class="font-bold" onclick="loadtreeinfo(${plant.id})">${plant.name}</h1>
                        <p class=" text-gray-600 ">${plant.description}</p>
                      <div class="flex justify-between">
                        <button class="btn rounded-3xl bg-[#f0fdf4] text-[#15803d] border-0">${plant.category}</button>
                         <h1 class="font-bold">৳${plant.price}</h1></div>
                    <button class="btn rounded-3xl bg-[#15803d] text-[#ffffff] border-0 w-full" onclick="yourcart(${plant.id})">Add to Cart</button>
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
    
    button.innerHTML = `<button class="  text-left button hover:bg-[#179f49] hover:text-[white]
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
const loadtreeinfo= (id)=>{
      const plant = allplants.find( p => p.id == id)
   const modal=document.getElementById("modal-container")
   modal.innerHTML =`
    <h3 class="text-lg font-bold">${plant.name}</h3>
    <img src="${plant.image}" alt="" class="object-cover w-full h-40">
    <P> <span  class="font-bold">Categries: </span>${plant.category}</p>
     <P> <span  class="font-bold">price: </span>৳${plant.price}</p>
      <P><span  class="font-bold">Description: </span>${plant.description}</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  `
  my_modal_1.showModal()
  
}

// your cart section
let total = 0
const yourcart=(id)=>{
      const plant =allplants.find(p=>p.id == id)
       let amount =parseInt(plant.price)
       total =total +amount
       alert(`${plant.name} is added to the cart`)

    const allyourcart = document.getElementById("yourcart")
      const div = document.createElement("div")
        div.innerHTML=`<div class="flex justify-between items-center bg-[#cff0dc] rounded p-3 gap-2 ">
                  <div><h1  class="font-bold">${plant.name}</h1>
                   <h1 class="text-gray-600 ">৳<span id="price">${plant.price}</span></h1>
                   </div>
                  <div  onclick ="removecart(${id},this)"><i class="fa-solid fa-xmark bg-red-600 p-1"></i></div>
                </div>
                `
          allyourcart.appendChild(div) 
           const p = document.getElementById("total")
              p.innerHTML= ` Total: ${total}`
}
const removecart=(id,element)=>{
    element.parentNode.parentNode.remove()
    const plant = allplants.find(p => p.id == id)
    let amount =parseInt(plant.price)
       total =total - amount
       console.log(total)
        const p = document.getElementById("total")
        p.innerHTML= ` Total: ${total}`
}

// spinner
const loader=(statement)=>{
  if(statement == true){
    document.getElementById("spinner").classList.remove("hidden")
    document.getElementById("cart").classList.add("hidden")

  }
  else{
document.getElementById("spinner").classList.add("hidden")
    document.getElementById("cart").classList.remove("hidden")
  }

}

categoriesfetch()
cartfetch()