import * as StringTools from '../nls/strings.js';
import problematicTemplate from '../templates/problematic.js';
import advantagesTemplate from '../templates/advantages.js';
import featuresTemplate from '../templates/features.js';
import signUpBenefits from '../templates/sign-up-benefits.js';
import navbarTemplate from '../templates/navbar.js';
import indexBannerTemplate from '../templates/index-banner.js';
import parralaxMiddleTemplate from '../templates/parralax-middle.js';
import contactUsTemplate from '../templates/contact-us.js';
import parralaxBottomTemplate from '../templates/parralax-bottom.js';
import footerTemplate from '../templates/footer.js';
import colorChangerModalTemplate from '../templates/color-changer-modal.js';
import colorChangerActionTemplate from '../templates/color-changer-action.js';
import {ColorPalette} from './colorconfig.js';

async function loadPage(){
  var strings = StringTools.default;
  //todo load efficiently
  renderContent({strings:strings,colorpalette:ColorPalette,calculateShade:calculateShade});
  $('body').append(ejs.render(colorChangerModalTemplate,{strings:strings,colorpalette:ColorPalette,calculateShade:calculateShade}));
  $('.modal').modal();
    
  InitBehavior();

  //init logic
  $("#primary-color > div.modal-content > ul > li > div.collapsible-body > div ").on('click',ColorSelected.bind(null,"PrimaryColor"))
  $("#secondary-color > div.modal-content > ul > li > div.collapsible-body > div ").on('click',ColorSelected.bind(null,"SecondaryColor"))
  $("#tertiary-color > div.modal-content > ul > li > div.collapsible-body > div ").on('click',ColorSelected.bind(null,"TertiaryColor"))

}
function RecolorAll (i_oNewColorPalette){
  var strings = StringTools.default;
  renderContent({strings:strings,colorpalette:i_oNewColorPalette,calculateShade:calculateShade});
  InitBehavior();
}
function renderContent(i_oOptions){
  $('body > *:not(.modal):not(.modal-overlay)').remove();
  $('body').attr("class",i_oOptions.colorpalette.BackgroundColor.value);
  if(new URL(window.location).searchParams.get("colorpalette") == "true"){
    $('body').append(ejs.render(colorChangerActionTemplate,i_oOptions));
  }
  $('body').append(ejs.render(navbarTemplate,i_oOptions));
  $('body').append(ejs.render(indexBannerTemplate,i_oOptions));
  $('body').append(ejs.render(problematicTemplate,i_oOptions));
  $('body').append(ejs.render(parralaxMiddleTemplate,i_oOptions));
  $('body').append(ejs.render(advantagesTemplate,i_oOptions));
  $('body').append(ejs.render(featuresTemplate,i_oOptions));
  $('body').append(ejs.render(parralaxBottomTemplate,i_oOptions));
  $('body').append(ejs.render(signUpBenefits,i_oOptions));
  $('body').append(ejs.render(footerTemplate,i_oOptions));

}

function InitBehavior(){
    //init material classes
    $('.fixed-action-btn').floatingActionButton({
      direction: 'left',
      hoverEnabled: false
    });
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
}
function ColorSelected(i_sLevel, i_oEvent){
  var l_oNewPalette = {};
  l_oNewPalette[i_sLevel] ={
    value:i_oEvent.target.classList[0],
    shade:i_oEvent.target.classList[1]||""
  };
  RecolorAll(Object.assign(ColorPalette,l_oNewPalette));
}



function calculateShade(i_sCurrentValue, i_nValue){
  var aShades = [
     "darken-4",
     "darken-3",
     "darken-2",
     "darken-1",
     "",
     "lighten-1",
     "lighten-2",
     "lighten-3",
     "lighten-4",
     "lighten-5"
  ]
  if(aShades.includes(i_sCurrentValue)){
     return aShades.hasOwnProperty(aShades.indexOf(i_sCurrentValue) + i_nValue) ? aShades[aShades.indexOf(i_sCurrentValue) + i_nValue] : aShades[aShades.indexOf(i_sCurrentValue)];
  }else{
     return "";
  }
}
loadPage();

