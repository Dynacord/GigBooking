export default `<div id="index-banner" class="parallax-container">
   <div class="section" >
     <div class="container">
     <h1 class="header center <%= colorpalette.SecondaryColor.value%>-text text-<%= calculateShade(colorpalette.SecondaryColor.shade,2)%>"><%= strings.title%></h1>
       <div class="row center">
         <h5 class="header col s12 light"><%= strings.slogan%></h5>
       </div>

     </div>
   </div>
   <div class="parallax"><img src="background1.jpg" alt="Unsplashed background img 1"></div>
 </div>`