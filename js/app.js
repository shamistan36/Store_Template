function copyMenu() {
    var dbtCategory = document.querySelector('.dbt-cat');
    var dbtPlace = document.querySelector('.departments');
    dbtPlace.innerHTML = dbtCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();