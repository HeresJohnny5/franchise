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
      // remove if not necessary
    }
  });
}

function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  var url = 'https://script.google.com/macros/s/AKfycbwwkHHaaoRpS8KisOq15Mt-DUhKGFB53Bb-8tz0tgy3FRuiugxe/exec';

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}

$(document).ready(function() {
  // Event Handlers
  $('#form-quote').submit(function(e) {
    e.preventDefault(); // prevents the browser from reloading
    // console.log($('form#form-quote').serializeObject());
    formSubmit(e.currentTarget.name);

    $('#zipcode').val('');
    document.getElementById('form-quote').reset();
    $('.modal').modal('toggle');
  });

  $('#go-btn').click(function() {
    var zipcode = $('#zipcode').val();

    getZipcode(zipcode);
    $('.spa-section').css('display', 'none');
    $('.modal-body .spa-section:first-child').css('display', 'block');

    spaSection();
  });
});
