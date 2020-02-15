export default `<div class="container">
   <div class="section" id="signup">
     <!--   Icon Section   -->
     <h3 class="center"><%=strings["section.sign-up-benefits"] %></h1>
     <div class="row">
       <div class="col s12 m6">
         <div class="icon-block">
           <h2 class="center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">email</i></h2>
           <h5 class="center"><%=strings["section.sign-up-benefits.newsletter"] %></h5>
         </div>
         <ul class="browser-default">
              <li><%= strings["section.sign-up-benefits.newsletter.p1"] %>
              <ul>
                <li><%= strings["section.sign-up-benefits.newsletter.p1.d1"] %></li>
              </ul>
              </li>
          </ul>
       </div>

       <div class="col s12 m6">
         <div class="icon-block">
           <h2 class=" center <%= colorpalette.TertiaryColor.value%>-text"><i class="material-icons">insert_comment</i></h2>
           <h5 class="center"><%=strings["section.sign-up-benefits.involvement"] %></h5>
         </div>
         <ul class="browser-default">
          <li><%= strings["section.sign-up-benefits.involvement.p1"] %>
            <ul class="browser-default"><li><%= strings["section.sign-up-benefits.involvement.p1.sp1"] %></li></ul>
          </li>
          <li><%= strings["section.sign-up-benefits.involvement.p2"] %>
            <ul class="browser-default"><li><%= strings["section.sign-up-benefits.involvement.p2.sp1"] %></li></ul>
          </li>
          <li><%= strings["section.sign-up-benefits.involvement.p3"] %>
            <ul class="browser-default"><li><%= strings["section.sign-up-benefits.involvement.p3.sp1"] %></li></ul>
          </li>
         </ul>
       </div>
     </div>

   </div>
 </div>`