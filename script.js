document.querySelectorAll(".video-card").forEach(card => {
            card.addEventListener("click", () => {
                const data = {
                    title: card.querySelector(".video-title").innerText,
                    author: card.querySelector(".video-author").innerText,
                    stats: card.querySelector(".video-stats").innerText,
                    thumbnail: card.querySelector("img").src,
                    duration: card.querySelector(".video-duration").innerText
                };

                localStorage.setItem("selectedVideo", JSON.stringify(data));
                location.href = "watch.html";
            });
        });

document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            let filter = tag.dataset.filter;

            document.querySelectorAll('.video-card').forEach(card => {
                let cat = card.dataset.category;

                if (filter === "all" || filter === cat) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active-tag'));
            tag.classList.add('active-tag');
        });
    });

/*let name1 = "Юрли!"

let subs = 237

console.log(name1)

let title = document.querySelector('.logo')

title.style.color = "red"
title.textContent = "Тест"

let body = document.querySelector('body')

//body.innerHTML = "<h1>опапа</h1>"

let button = document.querySelector('.btn')

button.addEventListener('click', function(){
    let age = prompt('Сколько тебе лет?', 'ван саусант');

    alert(`Тебе ${age} лет!`); // Тебе 100 лет!
})*/

let buttonMenu = document.querySelector('.burger-menu')
let menu = document.querySelector('.main-menu')

buttonMenu.addEventListener('click', function(){
    buttonMenu.classList.toggle('active')
    menu.classList.toggle('active')
})


$('.carusel').slick({
  CenterMode: true,
  CenterPadding: '60px',
  prevArrow: '<img src="images/Arrow_left.svg">',
  nextArrow: '<img src="images/Arrow_right.svg">',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});