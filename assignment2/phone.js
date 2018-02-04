$(document).ready(function() { 
	$("#contentT").show(); 
	$("#contentC").hide();
	$("#contentA").hide();
	$("#contentD").hide();
});


$("#Dialer").click(function() {
	$("#contentD").show();
	$("#contentC").hide();
	$("#contentA").hide();
	$("#contentT").hide();

});
$("#ContactList").click(function() {
	$("#contentC").show();
	$("#contentD").hide();
	$("#contentA").hide();
	$("#contentT").hide();
});
$("#AddContact").click(function() {
	$("#contentA").show();
	$("#contentD").hide();
	$("#contentC").hide();
	$("#contentT").hide();
});
$("#TestGesture").click(function() {
	$("#contentT").show();
	$("#contentD").hide();
	$("#contentC").hide();
	$("#contentA").hide();
});




$("#k1").click(function() {
	$("#numForm").val($("#numForm").val() + "\#")
});
$("#k2").click(function() {
	$("#numForm").val($("#numForm").val() + "2")
});
$("#k3").click(function() {
	$("#numForm").val($("#numForm").val() + "3")
});
$("#k4").click(function() {
	$("#numForm").val($("#numForm").val() + "4")
});
$("#k5").click(function() {
	$("#numForm").val($("#numForm").val() + "5")
});
$("#k6").click(function() {
	$("#numForm").val($("#numForm").val() + "6")
});
$("#k7").click(function() {
	$("#numForm").val($("#numForm").val() + "7")
});
$("#k8").click(function() {
	$("#numForm").val($("#numForm").val() + "8")
});
$("#k9").click(function() {
	$("#numForm").val($("#numForm").val() + "9")
});
$("#k0").click(function() {
	$("#numForm").val($("#numForm").val() + "0")
});
$("#kstar").click(function() {
	$("#numForm").val($("#numForm").val() + "\*")
});
$("#kpound").click(function() {
	$("#numForm").val($("#numForm").val() + "\#")
});
$("#kC").click(function() {
	$("#numForm").val("")
});

px = 0
py = 0
$("#gesture_area").mousedown(function(event) {
	$("#gesture_output").val("mousedown")
	px = event.pageX
	py = event.pageY
});
$("#gesture_area").mouseup(function(eventt) {
	output = ""
	if (eventt.pageY < py){
		output = " up";
	}
	if (eventt.pageY > py){
		output = " down";
	}
	if (eventt.pageX < px){
		$("#gesture_output").val("swipt left"+output);
	}
	else if (eventt.pageX > px){
		$("#gesture_output").val("swipe right"+output);
	}
	else {
		$("#gesture_output").val("mouseup"+output);
	}
});
$("#gesture_area").mouseleave(function() {
	$("#gesture_output").val("")
});









