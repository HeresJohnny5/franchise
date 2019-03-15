function getZipcode(zipcode) {
  console.log(zipcode);
}

$(document).ready(function() {
   // Event Handlers
   $('#go-btn').click(function(){
     var zipcode = $('#zipcode').val();

     getZipcode(zipcode);
   });
});
