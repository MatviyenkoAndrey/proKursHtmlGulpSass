$(function(){
	$(".phone .wrapper .tab").click(function() {
		$(".phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".prokurs_tab .wrapper .tab").click(function() {
		$(".prokurs_tab .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".prokurs_tab .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	$("#owl-example").owlCarousel({
  singleItem: true,
  navigation: true,
  navigationText: false
 });

	$(".btn_map_tabs .wrapper .tab").click(function() {
		$(".btn_map_tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".btn_map_tabs .tab_item").hide().eq($(this).index()).fadeIn()
 		$(".map .maps").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
});