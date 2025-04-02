<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(window).scroll(function() {
  var scrollTop = jQuery(window).scrollTop();
  var primeiraSecao = jQuery('#inicio');
  var menu = jQuery('.menu-fixo');  // Certifique-se de que o menu tenha a classe 'menu-fixo'

  // Verifica se a rolagem está dentro da primeira seção
  if (scrollTop < primeiraSecao.outerHeight()) {
    menu.addClass('fixo-na-primeira').removeClass('sumir');
  } else {
    menu.removeClass('fixo-na-primeira').addClass('sumir');
  }
});
</script>
<!-- end Simple Custom CSS and JS -->
