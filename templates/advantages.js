export default `<div class="container">
   <div class="section" id="advantages">
     <!--   Icon Section   -->
     <h3 class="center"><%=strings["section.advantages"] %></h1>
     <div class="row">
       <div class="col s12 m6">
         <div class="icon-block">
           <h2 class="center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">music_note</i></h2>
           <h5 class="center"><%=strings["advantages.musician"] %></h5>
         </div>
         <ul class="browser-default">
              <li><%= strings["advantages.musician.p1"] %>
                <ul class="browser-default">
                  <li><%= strings["advantages.musician.p1.sp1"] %></li>
                  <li><%= strings["advantages.musician.p1.sp2"] %></li>
                </ul>
              </li>
              <li><%= strings["advantages.musician.p2"] %></li>
              <li><%= strings["advantages.musician.p3"] %></li>
              <li><%= strings["advantages.musician.p4"] %></li>
              <li><%= strings["advantages.musician.p5"] %></li>
              <li><%= strings["advantages.musician.p6"] %></li>
          </ul>
       </div>

       <div class="col s12 m6">
         <div class="icon-block">
           <h2 class=" center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">location_city business_center</i></h2>
           <h5 class="center"><%=strings["advantages.municipality-entreprise"] %></h5>
         </div>
         <ul class="browser-default">
          <li><%= strings["advantages.municipality-entreprise.p1"] %>
            <ul class="browser-default">
              <li><%= strings["advantages.municipality-entreprise.p1.sp1"] %></li>
              <li><%= strings["advantages.municipality-entreprise.p1.sp2"] %></li>
              <li><%= strings["advantages.municipality-entreprise.p1.sp3"] %></li>
            </ul>
          </li>
          <li><%= strings["advantages.municipality-entreprise.p2"] %></li>
          <li><%= strings["advantages.municipality-entreprise.p3"] %></li>
         </ul>
       </div>
     </div>

   </div>
 </div>`