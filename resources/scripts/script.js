function getZipcode(zipcode) {
  console.log(zipcode);
  $('#modal-zipcode').val(zipcode);
}

$(document).ready(function() {
   // Event Handlers
   $('#go-btn').click(function() {
     var zipcode = $('#zipcode').val();

     getZipcode(zipcode);
   });
});
