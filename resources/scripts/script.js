function getZipcode(zipcode) {
  console.log(zipcode);
  $('#modal-zipcode').val(zipcode);
}

function spaSection() {
  $('.spa-section').one('keyup', function() {
    // console.log('this: ', this);
    // console.log($(this).attr('data-section'));

    var dataSectionAttr = $(this).attr('data-section');
    console.log(dataSectionAttr);

    var dataNextConditional = $(`[data-section="${dataSectionAttr}"]`).next('.spa-section').length;

    if (dataSectionAttr === "type") {
      console.log('Cool')
    } else {
      if (dataNextConditional === 1) {
        $(`[data-section="${dataSectionAttr}"]`).next('.spa-section').show();
      }
    }
  });
}

$(document).ready(function() {
  // Event Handlers
  $('#go-btn').click(function() {
    var zipcode = $('#zipcode').val();

    getZipcode(zipcode);

    spaSection();
  });
});
