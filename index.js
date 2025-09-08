console.log("hello")
const url = "https://openapi.programming-hero.com/api/plants"
const cartfetch =() => {
    fetch(url).then(res => res.json()).then(data => cartload(data.plants))
}

const cartload =(plants)=>{
    const allcartId = document.getElementById("cart")
   plants.forEach( plant=> {
    const div = document.createElement("div")
    div.innerHTML = `<div class="p-5 bg-white rounded space-y-3 w-full h-full "> <img src="${plant.image}" alt="" class="object-cover w-full h-40">
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




cartfetch()