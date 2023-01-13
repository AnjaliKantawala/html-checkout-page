$(document).ready(function () {

    if ($(window).width() > 991) {
        $(".containt-area").prepend($("header"));
        $(".sidebar").append($("footer"));

        const sidebar = document.querySelector(".sidebar");
        const sticky = sidebar.offsetTop;
        window.onscroll = function() {
            if (window.pageYOffset >= sticky) {
                sidebar.classList.add("sticky")
            } else {
                sidebar.classList.remove("sticky");
            }
        };
    }
    else {
        $("body .container").prepend($("header"));
        $("body .container").append($("footer"));
    }

    // Faq section
    const collapsedTitle = $('.collapsed-title');
    const collapsedContent = $('.collapsed-content');
    const clsExpladCollapsOpen = 'explad-collaps-open';
    collapsedTitle.on('click', function () {
        const expladCollaps = $(this).parent();
        const $collapsedContent = expladCollaps.find(collapsedContent).first();
        if (expladCollaps.hasClass(clsExpladCollapsOpen)) {
            $collapsedContent.slideUp();
            expladCollaps.removeClass(clsExpladCollapsOpen);
        }
        else {
            $collapsedContent.slideDown();
            expladCollaps.addClass(clsExpladCollapsOpen);
        }
    });

    // Tabs section
    const $tabContent = $('.tab-content');
    const $tabsNavLi = $('#tabs-nav li');
    $tabContent.hide().first().show();
    $tabsNavLi.first().addClass('active');
    $tabsNavLi.on('click', function () {
        const $this = $(this);
        const activeTab = $this.find('a').attr('href');
        $tabsNavLi.removeClass('active');
        $this.addClass('active');
        $tabContent.hide();
        $(activeTab).fadeIn();
    });

    // Email auto fill
    const email = document.getElementById("email");
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        email.value = savedEmail;
    }
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        localStorage.setItem("email", email.value);
    });

    // Input fill & not check
    $("input").each(function() {
        if ($(this).val()) $(this).addClass("filled");
    }); 
    $("input").on("change", function() {
        if ($(this).val()) $(this).addClass("filled");
    });
    $(".continue").on('click', function (e) {
        e.preventDefault();
        $("input").each(function() {
            if ($(this).val()) $(this).addClass("filled");
            const inputValue = $(this).val();
            if (inputValue === "") {
              $(this).parent().next(".error-message").text("This field is required.");
              $(this).parent().next(".error-message").css("padding-top","5px");
            }
            else {
              $(this).parent().next(".error-message").text("");
              $(this).parent().next(".error-message").css("padding-top","0");
            }
        }); 
    });     
});