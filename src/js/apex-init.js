/************
APEX Initialization
************/
$(function() {
    // Carousel
    $(".carousel").each(function() {
        var carousel = $(this);

        carousel.find(".carousel-item").each(function(index) {
            var attributes = (index === 0) ? "class=\"active\"" : "";
            carousel.find(".carousel-indicators").append("<li " + attributes + " data-target=\"#" + $(carousel).attr("id") + "\" data-slide-to=\"" + index + "\"></li>");
        });
    });

    // Collapsible
    $(".ab-region.collapse").attr({
        "role":"tablist",
        "aria-multiselectable":"true"
    });

    $("button[target]").each(function() {
        if ($("#" + $(this).attr("target")).length > 0) {
            $(this).attr({
                "data-toggle": "collapse",
                "data-target": "#" + $(this).attr("target"),
                "aria-expanded": "false",
                "aria-controls": $(this).attr("target")
            });
        }
    });
});
