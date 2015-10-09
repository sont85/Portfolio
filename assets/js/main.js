$(document).ready(function() {
  /*======= Skillset *=======*/
  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {
    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  });

  /* Bootstrap Tooltip for Skillset */
  $('.social a').tooltip();

  /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
  GitHubActivity.feed({
    username: "sont85",
    selector: "#ghfeed"
  });

  $('#contact_form').submit(function(e) {
    e.preventDefault();
    var email = $('#email').val(); // get email field value
    var name = $('#name').val(); // get name field value
    var phone = $('#phone').val(); // get name field value
    var msg = $('#message').val(); // get message field value
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': '7WmAYyvrBPxYbj6OUcGv_Q',
          'message': {
            'from_email': email,
            'from_name': name,
            'headers': {
              'Reply-To': email
            },
            'subject': 'Website Contact Form Submission',
            'text': 'Phone Number: ' + phone + '\n' + msg,
            'to': [{
              'email': 'sont85@gmail.com',
              'name': 'Son Truong',
              'type': 'to'
            }]
          }
        }
      })
      .done(function(response) {
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');
        $('#contactModal').modal('hide');
        swal("Message Sent", "Thank You, I'll return your message soon.", "success");

      })
      .fail(function(response) {
        swal("Message Fail", "I'm sorry, Please try again.", "error");
      });
  });
});
