const data = [
      {
          id:1,
          title: 'modern javascript 01',
          img: 'www.imgbb.com/12',
          seats:60,
          price: 1300
      },
      {
          id:2,
          title: 'modern javascript 02',
          img: 'www.imgbb.com/12',
          seats:60,
          price: 1300
      },
      {
          id:3,
          title: 'modern javascript 03',
          img: 'www.imgbb.com/12',
          seats:60,
          price: 1300
      },
      {
          id:4,
          title:'modern javascript 04',
          img: 'www.imgbb.com/12',
          seats:60,
          price: 1300
      },
      {
          id:5,
          title:'modern javascript 04',
          img: 'www.imgbb.com/12',
          seats:60,
          price: 1300
      },
      {
          id:6,
          title:'modern javascript 04',
          img: 'www.imgbb.com/12',
          seats:60,
          price: 1300
      },
]

document.getElementById('parent').innerHTML = data.map(item => {
   return (
      `<div>
      <div id="btn-items " class="card w-80 bg-base-100 shadow-xl">
      <figure class="px-4 pt-8">
        <img
          id="cart-img"
          src="./images//Rectangle 6.png"
          alt="img"
          class="rounded-lg"
        />
      </figure>
      <div class="p-4 px-4 text-start">
        <h2 id="cart-title" class="title card-title text-2xl">
          ${item.title}
        </h2>
        <p id="" class="mb-2">${item.price}TK</p>
        <button
          id="cart-btn" 
          
          class="rounded-full btn-sm text-white hover:bg-green-600 bg-[#21B573]"
        >
          Buy Courses
        </button>
      </div>
      <div class="flex justify-between p-3">
        <div class="flex items-center gap-2">
          <img src="./images/calendar-outline 1.png" alt="" srcset="" />
          <p>Start 20 April, 2021</p>
        </div>
        <div class="flex items-center gap-2">
          <img src="./images/people-outline 1.png" alt="" srcset="" />
          <p>${item.seats} Seats</p>
        </div>
      </div>
    </div></div>`
   )
     
 })


 document.getElementById('menu-container')

 // solved ----------------------------


//       let abc = data.map(items =>{
//             return items
//       })
//  var cart = []
//  function addCart(a){
//    cart.push(...abc(a));
//    displayCart()
//  }

//  function displayCart(a){
//      if(cart.length == 0){
//       document.getElementById('menu-container').innerHTML = 'Cart Emty'
//      }
//      else{
//       document.getElementById('menu-container').innerHTML = cart.map(items => {
//         var {title,price,img} = items;
//         return `  <div id="img-container" class="card card-side flex">
//         <figure>
//           <img
//             id="imgg"
//             class="w-16 p-2 rounded-2xl"
//             src="https://daisyui
//         .com/images/stock/photo-1635805737707-575885ab0820.jpg"
//             alt="Movie"
//           />
//         </figure>
//         <div class="flex">
//           <div class="p-1">
//             <h2 id="menu-title" class="font-bold">${title}</h2>
//             <p>${price}</p>
//           </div>
//           <button class="btn btn-square">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               class="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <img src="./images//Line 1.png" alt="" />
//       <div class="p-6 flex justify-between">
//         <div>
//           <h1 class="font-semibold">Sub-Total</h1>
//           <p>Items</p>
//         </div>
//         <h1 class="font-bold">1500 TK</h1>
//       </div>`
//       })
//      }
//  }

























// let btn = document.querySelectorAll('#btn-item');

// let price = document.querySelectorAll('#price');
// // console.log(btn);
// console.log(price);

// for(var i = 0; i < btn.length; i++){
//    btn[i].addEventListener('click', function(){
//       let title = document.querySelectorAll('#title');
//       console.log(title[i]); 
//        for(var p = 0; p <= title.length; p++){
//             console.log(title[p].innerHTML); 
//        }
            
//             })
// }



// btn.map((item)=>{
//       console.log(item);
//       item.addEventListener('click', function(){
//             console.log('clicked');
      
//       })
// })

