export default  `<nav class="<%= colorpalette.PrimaryColor.value%>" role="navigation">
   <div class="nav-wrapper container">
     <a id="logo-container" href="#" class="brand-logo white-text"><%= strings.title%></a>

     <ul id="nav-mobile" class="sidenav <%= colorpalette.BackgroundColor.value%>">
       <li><a class="sidenav-close <%= colorpalette.BackgroundColor.value%>" href="#problematic"><%= strings["section.problematic"] %></a></li>
       <li><a class="sidenav-close <%= colorpalette.BackgroundColor.value%>" href="#solution"><%= strings["section.solution"] %></a></li>
       <li><a class="sidenav-close <%= colorpalette.BackgroundColor.value%>" href="#advantages"><%= strings["section.advantages"] %></a></li>
       <li><a class="sidenav-close <%= colorpalette.BackgroundColor.value%>" href="#features"><%= strings["section.features"] %></a></li>
       <li><a class="sidenav-close <%= colorpalette.BackgroundColor.value%>" href="#signup"><%= strings["section.sign-up-benefits"] %></a></li>
     </ul>
     <a href="#" data-target="nav-mobile" class="sidenav-trigger <%= colorpalette.SecondaryColor.value%>-text"><i class="material-icons">menu</i></a>
   </div>
 </nav>`