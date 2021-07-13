$(".menu-button").on("click", function () {
    $(".burger").toggleClass("off"), $(".column").toggleClass("off")
}), $(document).ready(function () {
    $(".btn-section-0").click(function () {
        $(".btn-section-0").hide(), $("#toggle-4").slideToggle()
    }), $(".fa-one").click(function () {
        $("#toggle-4").slideToggle(), $(".btn-section-0").show()
    })
}), $(document).ready(function () {
    $(".btn-story").click(function () {
        $(".btn-story").hide(), $(".section-1-rest").css("background-color", "#b2d732"), $("#toggle-3").slideToggle()
    }), $(".fa-two").click(function () {
        $(".section-1-rest").css("background-color", "#66b032"), $("#toggle-3").slideToggle(), $(".btn-story").show()
    })
}), $(document).ready(function () {
    $(".box > a").on("click", function () {
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).siblings(".content").slideUp(500), $(".box > a i").removeClass("fa-minus").addClass("fa-plus")) : ($(".box > a i").removeClass("fa-minus").addClass("fa-plus"), $(this).find("i").removeClass("fa-plus").addClass("fa-minus"), $(".box > a").removeClass("active"), $(this).addClass("active"), $(".content").slideUp(500), $(this).siblings(".content").slideDown(500))
    })
}), $(window).scroll(function () {
    $(document).scrollTop() > 50 ? ($("#top-btn").addClass("top-button"), $("#top-btn").removeClass("off-i")) : ($("#top-btn").removeClass("top-button"), $("#top-btn").addClass("off-i"))
});