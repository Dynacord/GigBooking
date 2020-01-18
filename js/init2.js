async function loadPage(){
  var navbarTemplate =  $.get('templates/navbar.ejs');
  var indexBannerTemplate =  $.get('templates/index-banner.ejs');
  var advantagesTemplate =  $.get('templates/advantages.ejs');
  var parralaxMiddleTemplate =  $.get('templates/parralax-middle.ejs');
  var contactUsTemplate =  $.get('templates/contact-us.ejs');
  var parralaxBottomTemplate =  $.get('templates/parralax-bottom.ejs');
  var footerTemplate =  $.get('templates/footer.ejs');

  await Promise.all([
    navbarTemplate,
    indexBannerTemplate,
    advantagesTemplate,
    parralaxMiddleTemplate,
    contactUsTemplate,
    parralaxBottomTemplate,
    footerTemplate
  ]);

  navbarTemplate = await navbarTemplate;
  indexBannerTemplate = await indexBannerTemplate;
  advantagesTemplate = await advantagesTemplate;
  parralaxMiddleTemplate = await parralaxMiddleTemplate;
  contactUsTemplate = await contactUsTemplate;
  parralaxBottomTemplate = await parralaxBottomTemplate;
  footerTemplate = await footerTemplate;

  //todo load efficiently
  $('body').append(ejs.render(navbarTemplate))
  $('body').append(ejs.render(indexBannerTemplate))
  $('body').append(ejs.render(advantagesTemplate))
  $('body').append(ejs.render(parralaxMiddleTemplate))
  $('body').append(ejs.render(contactUsTemplate))
  $('body').append(ejs.render(parralaxBottomTemplate))
  $('body').append(ejs.render(footerTemplate))
  
} 
loadPage().then(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
});

