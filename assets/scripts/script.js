// bottom-sheet
function openBottomSheet(id) {
  const el = document.getElementById(id);
  el.classList.add('active');  
}
function closeBottomSheet(id) {
  const el = document.getElementById(id);
  el.classList.remove('active');  
}

// link
function linkPage(link) {
  document.location.href = link;
}

// table link
function openPage(link) {
  window.open(link);
};

$(document).ready(function () {
  $('table > tbody > tr').click(function () {
    $('table > tbody > tr').removeClass('selected');
    $(this).addClass('selected');
  });
});