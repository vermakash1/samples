var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openChat() {
     document.getElementById('chatbox').style.display='block';
     $('.btn-chat').hide();
   }
   function closeChat() {
     document.getElementById('chatbox').style.display='none';
     $('.btn-chat').show();
   }
   $('form').submit(function () {
     var text=$(this).find("textarea[name='msg']").val();

     alert(text);
   });
