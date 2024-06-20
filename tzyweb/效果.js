document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    let currentIndex = 1; // 初始时显示第二张图片

    function showCurrentBanner() {
        // 隐藏所有图片
        banners.forEach((banner, index) => {
            banner.style.display = index === currentIndex ? 'inline-block' : 'none';
            banner.style.opacity = index === currentIndex ? 1 : 0;
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 1) {
            currentIndex--;
            showCurrentBanner();
            
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < banners.length - 1) {
            currentIndex++;
            showCurrentBanner();
        } else {
            // 如果是最后一张图片，循环回到第一张
            currentIndex = 1;
            showCurrentBanner();
        }
    });
    // 初始化显示
    showCurrentBanner();
});

// 监听滚动事件
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var pageHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    // 如果页面底部有足够的空间显示footer
    if (pageHeight <(windowHeight + scrollPosition)) {
        footer.classList.add('show-at-bottom');
    } else {
        footer.classList.remove('show-at-bottom');
    }
});