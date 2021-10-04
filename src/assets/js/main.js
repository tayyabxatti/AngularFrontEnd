(function($){
  $(document).ready(function(){


window.onscroll = function() {myFunction()};

var header = document.getElementById("main-sidebar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
});
/*===========================
    Intiolize Plugins
=============================*/
$("#pod_list").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#attendence").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#students").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#assignments").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#view_submission").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#quiz").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#competation").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#manage_teachers").DataTable({
      "responsive": true,
      "autoWidth": true,
    });
$("#notes").DataTable({
      "responsive": true,
      "autoWidth": true,
    });

$(document).on('click', '.add-new-question.mcq', function (ev) {
  var $clone = $('#question').clone(true);
  $($clone).addClass('mcq');
  $($clone).removeClass('true_false');
  var $newbuttons = "<h6>MCQ</h6><div class='d-flex align-items-center'><span class='remove-question'><i class='fa fa-times' aria-hidden='true'></i></span><span class='collapse-question'></span></div>";
  var $input_option = '<input class="border rounded h6 p-2 w-100" type="text" name="question" placeholder="Question"><div class="option d-flex align-items-center justify-content-between"><input id="option1" class="border rounded h6 p-2 mr-2" type="text" name="option1" placeholder="Option1"><input id="option2" class="border rounded h6 p-2 mr-2" type="text" name="option2" placeholder="Option2"><input id="option3" class="border rounded h6 p-2 mr-2" type="text" name="option3" placeholder="Option3"><input id="option4" class="border rounded h6 p-2" type="text" name="option4" placeholder="Option4"></div><div id="right_ans" class="right-ans"><select id="select" class="border rounded w-100 p-2 h6"><option>Select Right Ans</option><option id="roption1"></option><option id="roption2"></option><option id="roption3"></option><option id="roption4"></option></select></div>';
  $clone.find('.head-question').html($newbuttons).end().appendTo($('#new_question'));
  $clone.find('.question-inner').html($input_option).end().appendTo($('#new_question'));
});
$(document).on('click', '.add-new-question.true_false', function (ev) {
  var $clone = $('#question').clone(true);
  $($clone).addClass('true_false');
  $($clone).removeClass('mcq');
  var $newbuttons = "<h6>True False</h6><div class='d-flex align-items-center'><span class='remove-question'><i class='fa fa-times' aria-hidden='true'></i></span><span class='collapse-question'></span></div>";
  var $input_option = '<div class="custom-control custom-radio mr-2"><input type="radio" class="custom-control-input" id="defaultUnchecked2" name="true_false1"><label class="custom-control-label" for="defaultUnchecked2">True</label></div><div class="custom-control custom-radio"><input type="radio" class="custom-control-input" id="defaultChecked1" name="true_false1"><label class="custom-control-label" for="defaultChecked1">False</label></div>';
  $clone.find('.head-question').html($newbuttons).end().appendTo($('#new_question'));
  $clone.find('.tru-fals').html($input_option).end().appendTo($('#new_question'));
});
$(document).on('click', '.remove-question', function () {
  $(this).parent().parent().parent().remove();
});
$(document).on('click', '#question.mcq span.collapse-question', function () {
   $(this).toggleClass('active');
    $(this).parent().parent().parent().children('.mcq').slideToggle('active');
});
$(document).on('click', '#question.true_false span.collapse-question', function () {
   $(this).toggleClass('active');
    $(this).parent().parent().parent().children('.true-false').slideToggle('active');
});
$('#select_question').change(function(){
  if(document.getElementById('true_false').selected == true){
         $('.add-new-question').addClass('true_false');
         $('.add-new-question').removeClass('mcq');
    }
    if(document.getElementById('mcq').selected == true){
         $('.add-new-question').addClass('mcq');
         $('.add-new-question').removeClass('true_false');
    }
});

// $("#option1").onChange("input", function(){
//     // Print entered value in a div box
//     $("#roption1").text($(this).val());
// });
// $('#option1').change(function() {
//   var value = $(this).val();
//   $("#roption1").append(value);
// });
$(document).on('change', '#question #option1', function () {
   var value = $(this).val();
   $(this).parent().parent().children("#right_ans").children("#select").children("#roption1").empty().append(value);
});
$(document).on('change', '#question #option2', function () {
   var value = $(this).val();
   $(this).parent().parent().children("#right_ans").children("#select").children("#roption2").empty().append(value);
});
$(document).on('change', '#question #option3', function () {
   var value = $(this).val();
   $(this).parent().parent().children("#right_ans").children("#select").children("#roption3").empty().append(value);
});
$(document).on('change', '#question #option4', function () {
   var value = $(this).val();
   $(this).parent().parent().children("#right_ans").children("#select").children("#roption4").empty().append(value);
});

$('.start-pod').click(function(){
    $('.allow-broadcast').addClass('hide');
    $('.allow-broadcast.start').addClass('show');
});
$('.editor-menu .editor-dropdown span.editor-dropdown-open').click(function(){
    $(this).toggleClass('current');
    $('.editor-menu .editor-dropdown .inner-menu').toggleClass('show');
});
// Slick Slider
$('.chart-slider').slick({
    dots: false,
    infinite: false,
    arrows:true
  });
$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    })
  });

 jQuery(function() {
    var pgurl = window.location.href.substr(window.location.href
      .lastIndexOf("/")+1);
    jQuery(".clv-dasboard .main-sidebar .main-menu li a").each(function(){
      if(jQuery(this).attr("href") == pgurl || jQuery(this).attr("href") == '' ){
        jQuery('.clv-dasboard .main-sidebar .main-menu li a').removeClass('active');
        jQuery(this).addClass("active");
        }
    })
  });

 /***********************
        Teacher Dashboard
 ************************/
 $('.allow-broadcast.teacher .pod-camera .img ul li a').click(function(){
    $(this).toggleClass('disable');
 });
 $('.allow-broadcast.teacher .related-call ul li a').click(function(){
    $(this).toggleClass('disable');
 });
  $('.collaborate-camera .inner ul li a').click(function(){
    $(this).toggleClass('disable');
 });

  // chs
  $('.chs-section .right .rboxgroups .gbox .right span').click(function(){
      $(this).parent().children('.acinner').toggleClass('show');
  });
$(".tm-input").tagsManager();

/*===========================
    Theme Functions
=============================*/
function theme_script(){

}
//============================
$(document).ready(function () {
   theme_script();
$(window).resize(function () {
  theme_script();
  });
});
/*===========================
    Extra Function
=============================*/
$(function () {
    $('.site-input').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});
/*===========================
    Scroll Animation
=============================*/
window.sr = ScrollReveal();
 sr.reveal('.footop', { 
  duration: 1000,
  origin: 'top',
  distance: '100px',
  useDelay: 'onload'
});
 sr.reveal('.fooright', { 
  duration: 1000,
  origin: 'right',
  distance: '50px',
  useDelay: 'onload'
});
  sr.reveal('.fooleft', { 
  duration: 1000,
  origin: 'left',
  distance: '50px',
  useDelay: 'onload'
});
sr.reveal('.foobottom', { 
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  useDelay: 'onload'
});
/*===========================
    Theme Page Loader
=============================*/
//  $(window).on('load', function () {
//     $('#status').fadeOut();
//     $('#preloader').delay(100).fadeOut('slow');
// });   
})(jQuery);