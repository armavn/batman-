$(document).ready(function () {
  let tabsItem = $('.tab-item');

  tabsItem.on('click', function(event){
    event.preventDefault();
    let active_content = $(this).attr('href');
    $('.visible').toggleClass('visible')
    $(active_content).toggleClass('visible');
    
  });

});