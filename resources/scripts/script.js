function getZipcode(zipcode) {
  $('#formControlZipcode').val(zipcode);
}

function spaSection() {
  $('.spa-section').one('click', function() {
    var dataSectionAttr = $(this).attr('data-section');

    if (dataSectionAttr === 'email') {
      $('.spa-section').one('keyup', function() {
        $(`[data-section="${dataSectionAttr}"]`).next('.spa-section').show().next('.spa-section').show();
      });
    } else if (dataSectionAttr === 'phone' || dataSectionAttr === 'notes') {
      $('.spa-section').one('keyup', function() {
        $(`[data-section="${dataSectionAttr}"]`).next('.spa-section').show();
      });
    } else if (dataSectionAttr === 'frequency-input1') {
      $('.spa-section').on('change', function() {
        $(`[data-section="${dataSectionAttr}"]`).next('.spa-section').show().next('.spa-section').show();

        $('button').attr("disabled", false);
      });
    } else if (dataSectionAttr === 'type') {
      $('.spa-section').on('change', function() {
        $(`[data-section="${dataSectionAttr}"]`).next('.spa-section').show().next('.spa-section').show();
      });
    } else {
      console.log('ldjfldjfldfjl');
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
