export default `<div class="container">
   <div class="section" id="features">
     <!--   Icon Section   -->
     <h3 class="center"><%=strings["section.features"] %></h1>
     <div class="row">
       <div class="col s12 m6">
         <div class="icon-block">
           <h2 class="center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">music_note</i></h2>
           <h5 class="center"><%=strings["features.musician"] %></h5>
         </div>
         <ul class="browser-default">
              <li><%= strings["features.musician.p1"] %></li>
              <li><%= strings["features.musician.p2"] %></li>
              <li><%= strings["features.musician.p3"] %></li>
              <li><%= strings["features.musician.p4"] %></li>
              <li><%= strings["features.musician.p5"] %></li>
              <li><%= strings["features.musician.p6"] %></li>
              <li><%= strings["features.musician.p7"] %></li>
          </ul>
       </div>

       <div class="col s12 m6">
         <div class="icon-block">
           <h2 class=" center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">location_city business_center</i></h2>
           <h5 class="center"><%=strings["features.municipality-entreprise"] %></h5>
         </div>
         <ul class="browser-default">
          <li><%= strings["features.municipality-entreprise.p1"] %></li>
          <li><%= strings["features.municipality-entreprise.p2"] %></li>
          <li><%= strings["features.municipality-entreprise.p3"] %></li>
          <li><%= strings["features.municipality-entreprise.p4"] %></li>
          <li><%= strings["features.municipality-entreprise.p5"] %></li>
          <li><%= strings["features.municipality-entreprise.p6"] %></li>
          <li><%= strings["features.municipality-entreprise.p7"] %></li>
         </ul>
       </div>
     </div>

   </div>
 </div>`