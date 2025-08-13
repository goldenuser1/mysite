$(document).ready(function(){
    
    // مخفی کردن صفحه لودینگ
    setTimeout(function() {
        $('.loading').addClass('hidden');
        setTimeout(function() {
            $('.loading').remove();
        }, 500);
    }, 1500);
    
    // انیمیشن ورود صفحه
    $('body').hide().fadeIn(1000);
    
    // انیمیشن هدر
    $('header').css('opacity', '0').animate({opacity: 1}, 1500);
    
    // منوی اصلی با انیمیشن
    $(".has-submenu").hover(
        function() {
            $(this).find(".submenu").stop(true, true).addClass('show');
        },
        function() {
            $(this).find(".submenu").stop(true, true).removeClass('show');
        }
    );
    
    // کلیک روی منوها
    $('.main-menu ul li a').click(function(e){
        if($(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
        }
        
        // حذف کلاس فعال از همه منوها
        $('.main-menu ul li').removeClass('active');
        // اضافه کردن کلاس فعال به منوی کلیک شده
        $(this).parent().addClass('active');
        
        // انیمیشن کلیک
        $(this).addClass('clicked');
        setTimeout(function(){
            $('.clicked').removeClass('clicked');
        }, 300);
    });
    
    // انیمیشن دکمه مشاوره
    $('.consult-btn').hover(
        function() {
            $(this).addClass('pulse');
        },
        function() {
            $(this).removeClass('pulse');
        }
    );
    
    // اسکرول نرم برای لینک‌های داخلی
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000, 'easeInOutQuart');
        }
    });
    
    // انیمیشن برای آیتم‌های منو
    $('.main-menu ul li').each(function(index){
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        }).delay(index * 100).animate({
            'opacity': '1',
            'transform': 'translateY(0)'
        }, 600);
    });
    
    // انیمیشن برای زیرمنوها
    $('.submenu li').each(function(index){
        $(this).css({
            'opacity': '0',
            'transform': 'translateX(20px)'
        });
    });
    
    // فعال کردن انیمیشن زیرمنوها هنگام hover
    $('.has-submenu').hover(
        function() {
            $(this).find('.submenu li').each(function(index){
                $(this).delay(index * 50).animate({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                }, 300);
            });
        },
        function() {
            $(this).find('.submenu li').css({
                'opacity': '0',
                'transform': 'translateX(20px)'
            });
        }
    );
    
    // انیمیشن برای دکمه مشاوره
    $('.consult-btn').on('mouseenter', function(){
        $(this).addClass('glow');
    }).on('mouseleave', function(){
        $(this).removeClass('glow');
    });
    
    // انیمیشن اسکرول
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        
        // تغییر شفافیت هدر هنگام اسکرول
        if(scrolled > 100) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
        
        // انیمیشن برای عناصر هنگام اسکرول
        $('.main-menu ul li').each(function(){
            var elementTop = $(this).offset().top;
            var elementVisible = 150;
            
            if(scrolled > elementTop - elementVisible) {
                $(this).addClass('animate');
            }
        });
    });
    
    // انیمیشن برای فوتر
    $('footer').waypoint(function(){
        $(this.element).addClass('animated');
    }, {
        offset: '90%'
    });
    
    // منوی موبایل
    if($(window).width() <= 768) {
        $('.has-submenu > a').click(function(e){
            e.preventDefault();
            $(this).parent().toggleClass('mobile-open');
            var $submenu = $(this).siblings('.submenu');
            if($submenu.hasClass('mobile-open')) {
                $submenu.removeClass('mobile-open show');
            } else {
                $submenu.addClass('mobile-open show');
            }
        });
    }
    
    // انیمیشن تایپ برای عنوان اصلی
    var title = $('main h1');
    var text = title.text();
    title.text('').show();
    
    var i = 0;
    var typeWriter = setInterval(function(){
        title.text(title.text() + text.charAt(i));
        i++;
        if(i >= text.length) {
            clearInterval(typeWriter);
            title.addClass('bounce');
        }
    }, 100);
    
    // اضافه کردن کلاس‌های CSS برای انیمیشن‌ها
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .clicked { transform: scale(0.95) !important; }
            .pulse { animation: pulse 0.6s ease-in-out; }
            .glow { box-shadow: 0 0 20px rgba(255, 102, 0, 0.6) !important; }
            .scrolled { background: rgba(102, 126, 234, 0.95) !important; }
            .animate { animation: slideInUp 0.6s ease-out; }
            .animated { animation: fadeInUp 1s ease-out; }
            .mobile-open > a::after { transform: rotate(180deg) !important; }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            @keyframes slideInUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes fadeInUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `)
        .appendTo('head');
        
    // اضافه کردن انیمیشن برای شبکه‌های اجتماعی
    $('.social a').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );
    
    // انیمیشن برای فوتر لینک‌ها
    $('.footer-columns a').hover(
        function() {
            $(this).addClass('pulse');
        },
        function() {
            $(this).removeClass('pulse');
        }
    );
    
    // بهبود تجربه کاربری - اضافه کردن کلاس‌های hover برای موبایل
    if('ontouchstart' in window) {
        $('.main-menu ul li a, .consult-btn').on('touchstart', function() {
            $(this).addClass('touch-active');
        }).on('touchend', function() {
            var $this = $(this);
            setTimeout(function() {
                $this.removeClass('touch-active');
            }, 150);
        });
    }
});
