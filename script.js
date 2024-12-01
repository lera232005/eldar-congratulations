const images = [
    { src: "photo1.jpg", info: "По началу стеснялась тебя просить сфоткаться, поэтому даже самые стремные фотографии для меня были самыми красивыми и дорогими 🥰" },
    { src: "photo2.jpg", info: "С каждым днем, проведенным с тобой, я чувствовала комфорт и спокойствие, и что ближе и роднее человека я уже не встречу 🫶🏼" },
    { src: "photo3.jpg", info: "Очень сильно по тебе скучаю, даже когда мы не видимся час, поэтому всегда радовалась твоим звонкам и могла отложить ради них самые важные дела" },
    { src: "photo4.jpg", info: "Это одно из приятных воспоминаний с тобой, когда ты сам предложил сфоткаться. Я была приятно удивлена, когда ты захотел выставить историю со мной, чувствовала себя самой счастливой, даже от такой мелочи " },
    { src: "photo5.jpg", info: "Чем больше мы общались, тем больше я в тебе видела совсем другого человека, очень нежного и доброго, хотя на первый взгляд ты таким не кажешься" },
    { src: "photo6.jpg", info: "Просто хочу сказать, что безумно тебя люблю, люблю каждую секунду проведенную с тобой. Для тебя, я готова сделать многое, ты мой любимый и близкий человечек, спасибо, что ты у меня есть 💖" },
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
