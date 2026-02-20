import './index.css'
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import Swiper from 'swiper';
import { EffectFade, Autoplay, Scrollbar } from 'swiper/modules';

// Initialize Alpine
window.Alpine = Alpine
Alpine.start()
Alpine.plugin(collapse)

const swiper = new Swiper('.hero-swiper', {
    // Modules
    modules: [EffectFade, Autoplay],
    
    // Options
    speed: 1000,
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,                    // 5 วินาทีต่อสไลด์
        disableOnInteraction: false,     // ไม่หยุดเมื่อ user interact
        pauseOnMouseEnter: true,         // หยุดเมื่อ hover
        reverseDirection: false,
        waitForTransition: true,         // รอ transition เสร็จก่อน
    },
    
    // บังคับให้ autoplay ทำงานทันที
    on: {
        init: function() {
            // เริ่ม autoplay ทันทีที่ initialize
            this.autoplay.start();
        },
        slideChange: function() {
            console.log('Slide changed to:', this.realIndex);
        }
    },
    
    // Effects
    effect: 'fade',
});

const swiperTextSlide = new Swiper('.marquee-swiper', {
    // Modules
    modules: [EffectFade, Autoplay, Scrollbar],
    
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 80,
    loop: true,
    speed: 6000,
    autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    },
});
