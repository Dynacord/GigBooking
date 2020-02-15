export default `
<div class="fixed-action-btn">
  <a class="btn-floating btn-large <%= colorpalette.SecondaryColor.value%>">
    <i class="large material-icons">color_lens</i>
  </a>
  <ul>
    <li>
      <a href="#primary-color" data-position="top" data-tooltip="Primary color" class="modal-trigger tooltipped btn-floating <%= colorpalette.PrimaryColor.value%>"></a>
    </li>
    <li>
      <a href="#secondary-color" data-position="top" data-tooltip="Secondary color" class="modal-trigger tooltipped btn-floating <%= colorpalette.SecondaryColor.value%>"></a>
    </li>
    <li>
      <a href="#tertiary-color" data-position="top" data-tooltip="Tertiary color" class="modal-trigger tooltipped btn-floating <%= colorpalette.TertiaryColor.value%>"></a>
    </li>
    <li>
      <a href="#export-config" data-position="top" data-tooltip="Share Color configuration" class="modal-trigger tooltipped btn-floating <%= colorpalette.TertiaryColor.value%>">
        <i class="large material-icons">share</i>
      </a>
    </li>
  </ul>
</div>
`

