$(document).ready(function() { 
	$("#contentD").show(); 
	$("#contentC").hide();
	$("#contentA").hide();
});


$("#Dialer").click(function() {
	$("#contentD").show();
	$("#contentC").hide();
	$("#contentA").hide();
});


$("#ContactList").click(function() {
	$("#contentC").show();
	$("#contentD").hide();
	$("#contentA").hide();
});
$("#AddContact").click(function() {
	$("#contentA").show();
	$("#contentD").hide();
	$("#contentC").hide();
});