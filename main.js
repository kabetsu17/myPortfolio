'use strict';

{

  // ヘッダーにあるページ内リンクをクリックしたときの動作
  $('a[href^="#"]').click(function() {
		var speed = 800;
		var adjust = $('.header').height();
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - adjust;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

  // ポートフォリオのスライドショー
  const slideshowDatas = [
    ['images/portfolio1.jpg', "作品１についての説明です。"],
    ['images/portfolio2.jpg', "作品２についての説明です。"],
    ['images/portfolio3.jpg', "作品３についての説明です。"],
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById('portfolio-main-image');
  mainImage.src = slideshowDatas[currentIndex][0];
  const mainDescription = document.getElementById('baloon');
  mainDescription.textContent = slideshowDatas[currentIndex][1];

  slideshowDatas.forEach((slideshowData, index) => {
    const img = document.createElement('img');
    img.src = slideshowData[0];

    const li = document.createElement('li');
    if(index === currentIndex) {
      li.classList.add('current');
    }

    li.addEventListener('click', () => {
      mainImage.src = slideshowData[0];
      mainDescription.textContent = slideshowData[1];

      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    const thumbnails = document.querySelectorAll('.thumbnails > li');

    let target = currentIndex + 1;
    if(target === slideshowDatas.length) {
      target = 0;
    }
    thumbnails[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    const thumbnails = document.querySelectorAll('.thumbnails > li');

    let target = currentIndex - 1;
    if(target === -1) {
      target = slideshowDatas.length - 1;
    }
    thumbnails[target].click();
  });
}
