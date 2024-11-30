const images = [
    { src: "photo1.jpg", info: "Наше первое совместное фото 🥰" },
    { src: "photo2.jpg", info: "Ты мой комфортик 🫶🏼" },
    { src: "photo3.jpg", info: "Наши видеозвонки 😂" },
    { src: "photo4.jpg", info: "Долгожданная встреча 🤪" },
    { src: "photo5.jpg", info: "буси с Бусей 😻" },
    { src: "photo6.jpg", info: "Люблю тебя, как Лера Эльдара 💖" },
  ];
  
  function showImage(index) {
    const container = document.getElementById("photo-container");
    const photo = document.getElementById("photo");
    const info = document.getElementById("info");
  
    photo.src = images[index - 1].src;
    info.textContent = images[index - 1].info;
    container.classList.remove("hidden");
  }
  
  function hidePhoto() {
    const container = document.getElementById("photo-container");
    container.classList.add("hidden");
  }
