/**
 * 
 */
export default class Template {

   constructor(i_sDOMString, i_oOptions) {
      this.sDOMString = i_sDOMString;
      var parsedDocument = ParseElement.call(this,i_sDOMString, "text/html");
      if (parsedDocument.body.childElementCount > 1) {
         //templates should only support 1 element
         this.DOMElement = ParseElement.call(this,i_sDOMString, "text/html").body.firstChild;
      } else {
         throw new Error("Templates type objects only support 1 element")
      }
   }

   refresh(i_sDOMString, i_oOptions) {
      //can only change innerHTML of dom element to keep it's reverence
      var newDom = ParseElement.call(this,i_sDOMString);
      this.DOMElement.innerHTML = newDom.innerHTML;
   }
}


function ParseElement(i_sDOMString){
   var domParser = new DOMParser();
   var parsedDocument = domParser.parseFromString(i_sDOMString, "text/html");
   var DOMElement;
      if (parsedDocument.body.childElementCount > 1) {
         //templates should only support 1 element
         DOMElement = domParser.parseFromString(i_sDOMString, "text/html").body.firstChild;
      } else {
         throw new Error("Templates type objects only support 1 element")
      }
   return DOMElement;
}