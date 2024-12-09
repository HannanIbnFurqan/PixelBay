const data = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1719937206589-d13b6b008196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    description: "Image 1 description",
    Like: 0
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1732919258508-3fd53a8007b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    description: "Image 2 description",
    Like: 0
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1731484396266-b80443ec385b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",
    description: "Image 3 description",
    Like: 0
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1732832133237-d947499e75d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
    description: "Image 4 description",
    Like: 0
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1732572854523-f330af9a72ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D",
    description: "Image 5 description",
    Like: 0
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=600",
    description: "Image 6 description",
    Like: 0
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Image 6 description",
    Like: 0
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Image 6 description",
    Like: 0
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/4054069/pexels-photo-4054069.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Image 6 description",
    Like: 0
  },
  
];

const container = document.querySelector('#container')

data.forEach(function (elem) {
  // Create a wrapper for each image and heart
  let wrapper = document.createElement('div');
  wrapper.classList.add('image-wrapper'); // A new wrapper class for styling

  // Create and set the image
  let img = document.createElement('img');
  img.src = elem.url;
  img.classList.add('image');

  // Create the heart icon
  let heart = document.createElement('i');
  heart.classList.add('ri-heart-3-fill'); 
  heart.classList.add('heart'); 
  // create like counter
  let likeCount = document.createElement('span');
  likeCount.classList.add('Like-count')
  likeCount.innerHTML = `Like: ${elem.Like}`
   
  // Append the image likeCount and heart to the wrapper
  wrapper.appendChild(img);
  wrapper.appendChild(heart);
  wrapper.appendChild(likeCount);

  // Append the wrapper to the container
  container.appendChild(wrapper);

  // Add event listener for the image
  img.addEventListener('dblclick', function () {
    heart.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(function(){
      heart.style.transform = 'translate(-50%, -50%) scale(0)';
    },1500)

  });

  // heart.addEventListener('click', function () {
  //   Increment the like count for the current image
  //   elem.Like++;
  //   likeCount.innerText = `Likes: ${elem.Like}`;
  //   console.log('like = ', elem.Like)
  // });
});