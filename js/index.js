$(document).ready(function () {
    $('#slot2').hide();
  $('#load_more').on('click', function () {
    $('#slot2').show();
    $('#load_more').replaceWith(`<button type="button" class="btn nav_button text-white load_more" id="load_less"><div class="d-flex justify-content-center"><p>Show Less</p><i class='bx bxs-down-arrow-alt text-white fs-2'></i></div></button>`);
  })
  });