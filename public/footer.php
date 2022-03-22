<footer style="display:flex; flex-direction: row; justify-content: space-around; align-item: center;">
  <p>Author : Célien RENAULT<br>
    <a href="mailto:renaultcelienr@gmail.com">renaultcelienr@gmail.com</a>
  </p>
  <div>
    <a target="_blank" href="https://www.instagram.com/celiendrawings"><img style="width: 5vw;" src="public/img/insta.png" alt="Instagram"></a>
    <a target="_blank" href="https://github.com/CELAULT"><img style="width: 5vw;" src="public/img/github.png" alt="GitHub"></a>
  </div>
</footer>

<script type="text/javascript">
  $('a[href^="#"]').click(function() {
    var id = $(this).attr("href");
    var offset = $(id).offset().top
    $('html, body').animate({
      scrollTop: offset
    }, 'slow');
    return false;
  });
</script>

</body>

</html>