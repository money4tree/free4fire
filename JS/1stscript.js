$(function() {
  // Enable/disable referral code input based on checkbox
  $('#referralCodeCheckbox').change(function() {
    if ($(this).is(':checked')) {
      $('#referralCode').prop('disabled', false);
    } else {
      $('#referralCode').prop('disabled', true);
    }
  });

  // Update skin options based on selected weapon
  $('#weapon').change(function() {
    var weapon = $(this).val();
    $('#skin').prop('disabled', false);
    $('#skin').find('option').prop('disabled', true);
    if (weapon == '1') {
      $('#skin').find('option[value="1"]').prop('disabled', false);
      $('#skin').find('option[value="2"]').prop('disabled', false);
    } else if (weapon == '2') {
      $('#skin').find('option[value="3"]').prop('disabled', false);
      $('#skin').find('option[value="4"]').prop('disabled', false);
    } else if (weapon == '3') {
      $('#skin').find('option[value="5"]').prop('disabled',    false);
  $('#skin').find('option[value="6"]').prop('disabled', false);
} else {
  $('#skin').prop('disabled', true);
}
});

// Validate and enable/disable submit button
$('form').on('input', function() {
var id = $('#id').val();
var email = $('#email').val();
var referralCode = $('#referralCode').val();
var weapon = $('#weapon').val();
var skin = $('#skin').val();
var termsAndConditions = $('#termsAndConditions').is(':checked');

if (id && email && termsAndConditions && ((referralCode && $('#referralCodeCheckbox').is(':checked')) || !referralCode) && ((skin && weapon) || (!skin && !weapon))) {
  $('#submit').prop('disabled', false);
  $('#submit').removeClass('btn-secondary').addClass('btn-primary');
} else {
  $('#submit').prop('disabled', true);
  $('#submit').removeClass('btn-primary').addClass('btn-secondary');
}
});

// Submit form
$('form').on('submit', function(e) {
e.preventDefault();
// handle form submission
});
});
