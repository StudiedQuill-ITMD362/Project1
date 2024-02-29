// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  //Asked ChatGTP for this because I spent a few hours trying to solve this on my own but gave up
  //Most of it I did on my own, it was just changing vanilla js to jquery
  $('#signUp').on('click', function(){
    var message = '';
    var fname = $('#firstName').val();
    message += 'First Name: ' + fname + '\n';
    var lname = $('#lastName').val();
    message += 'Last Name: ' + lname + '\n';
    var email = $('#eMail').val();
    message += 'Email: ' + email + '\n';
    var pw = $('#passWord').val();
    message += 'Password: ' + pw + '\n';
    message += 'Thank for signing up for the beta access of F.O.E and hope you enjoy!';
    alert(message);
  });
});