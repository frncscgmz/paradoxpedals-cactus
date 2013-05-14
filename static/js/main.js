function getCurrentPage() {
   var pageUrl = document.location.href;
   var pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
   return pageName.toLowerCase();
}

$(document).ready(function() {
   //console.log("Hello!");
   var currentPage = getCurrentPage();
   switch(currentPage) {
      case 'index.html':
         $('#li_home').addClass('active');
         break;
      case 'pedales.html':
         $('#li_pedales').addClass('active');
         break;
      case 'about.html':
         $('#li_about').addClass('active');
         break;
      case 'contacto.html':
         $('#li_contacto').addClass('active');
         break;
      default:
         $('#li_home').addClass('active');
         break;
   }
});
