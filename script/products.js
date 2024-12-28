const data = [
  {
    id: 1,
    img: './images/pro-imgs/Untitled-3.png',
    title: "تنسيق الهيدر و الفوتر",
    text: 'تصميم الهيدر و الفوتر باسنخدام css',
    price: '10$',
  },
  {
    id: 2,
    img: './images/pro-imgs/1.jpg',
    title: "تنسيق الهيدر و الفوتر",
    text: 'تصميم الهيدر و الفوتر باسنخدام css',
    price: '10$',
},
  {
    id: 4,
    img: './images/pro-imgs/1.jpg',
    title: "تنسيق الهيدر و الفوتر",
    text: 'تصميم الهيدر و الفوتر باسنخدام css',
    price: '10$',
},
  {
    id: 4,
    img: './images/pro-imgs/1.jpg',
    title: "تنسيق الهيدر و الفوتر",
    text: 'تصميم الهيدر و الفوتر باسنخدام css',
    price: '10$',
},
]

function sentMs(title, id) {
  let number = '+963980150973';
  var url = "https://wa.me/" + number;
  window.open(url, '_blank').focus();
}



function showData(rang) {
  let products = document.getElementById('products')

  for (var i = 0; i < rang; i++) {
    let product = `
    <div class="product-card w-40 sm:w-56 bg-white rounded-xl overflow-hidden shadow m-2">
      <img src="${data[i].img}" class="w-full rounded-xl">
      <div class="p-2 rounded-xl">
        <h3 class="font-bold text-gray-800">${data[i].title}</h3>
        <span class="text-xs text-gray-400">${data[i].text}</span>
        <p>السعر: ${data[i].price}</p>
        <button class="pro-btn text-white p-2 w-full rounded-xl" onclick='sentMs()'>أطلبه الآن</button>
      </div>
    </div>
  `;

    products.innerHTML += product;
  }
}
showData(data.length)