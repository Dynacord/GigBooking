export default `<div class="container">
   <div class="section" id="problematic">
     <!--   Icon Section   -->
     <div class="carousel carousel-slider center hide-on-small">
       <div class="carousel-item">
         <div class="icon-block">
           <h1 class="center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">music_note</i></h2>
           <h5 class="center"><%=strings["problematic.musician.label"] %></h5>

           <p class="light"><%=strings["problematic.musician.text"] %></p>
         </div>
       </div>

       <div class="carousel-item">
         <div class="icon-block">
           <h1 class="center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">location_city</i></h2>
           <h5 class="center"><%=strings["problematic.municipality.label"] %></h5>

           <p class="light"><%=strings["problematic.municipality.text"] %></p>
         </div>
       </div>

       <div class="carousel-item">
         <div class="icon-block">
           <h1 class="center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">business_center</i></h2>
           <h5 class="center"><%=strings["problematic.entreprise.label"] %></h5>

           <p class="light"><%=strings["problematic.entreprise.text"] %></p>
         </div>
       </div>
     </div>

   </div>
 </div>`