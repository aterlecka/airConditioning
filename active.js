function showHideFooterLinks(child) {
    if ($(document).width() > 980)
        return;

    let menu = $(child).parent().find('div');
    if (menu.css('display') === "none") {
        menu.css('display', 'flex');
        $(child).find('.fontello-icon').css('transform', 'rotate(-90deg)')
    } else {
        menu.css('display', 'none');
        $(child).find('.fontello-icon').css('transform', 'rotate(90deg)')
    }
}

function showHideHeaderLinks() {
    if ($(document).width() > 980)
        return;
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
