var cronometro;
var url='./img/img';
var playlist = [{
	url		: "./aud/ruleta.mp3",
	title	: "Ruleta"
}];
$(document).ready(function(){
   	var aud = $('#jukebox .aud').get(0);
   	aud.pos = -1;
	$('#jukebox .play').bind('click', function(evt){
		evt.preventDefault();
		if (aud.pos < 0) {
			$('#jukebox .next').trigger('click');
		} else {
			aud.play();
		}
	});
	$('#rotar').bind('click', function(evt) {
		evt.preventDefault();
		aud.pos++;
		if (aud.pos == playlist.length) aud.pos = 0;
			aud.setAttribute('src', playlist[aud.pos].url);
			aud.load();
		})
		aud.addEventListener('canplay', function(evt) {
		$('#jukebox .play').trigger('click');
	});
});
function detenerse(){
	clearInterval(cronometro);
}
$("#rotar").rotate({bind:{
	click: function(){
		contador_s =0
		$('#activ').html("Please wait...");
		var randomnumber=Math.floor(Math.random() * (18000 - 1800 + 1) + 1950);
		$("#img").rotate({
			duration:6100,
			animateTo:randomnumber,
			easing: $.easing.easeInOutElastic
		})
		contador_s =0;
		cronometro = setInterval(
		function(){
			var numeroazar = Math.floor((Math.random() * 9) + 1);
			$('#random').attr('src',url+numeroazar+'.png');
			contador_s++;
			if (contador_s==55) {
					detenerse();					
					$('#activ').html("His activity is");
					$('#activ').hide(750,"swing",function(){
						var msg;
						switch(numeroazar) {
    						case 1:
    							msg="Wrist stretch";
						    break;
						    case 2:
						    	msg="Shoulder Stretch";
						    break;
						    case 3:
						    	msg="Neck stretch";
						    break;
						    case 4:
						    	msg="Squats";
						    break;
						    case 5:
						    	msg="Jumping Jacks";
						    break;
						    case 6:
						    	msg="Mauntain Climbers";
						    break;
						    case 7:
						    	msg="fingers mobilization";
						    break;
						    case 8:
						    	msg="shoulder mobilization";
						    break;
						    case 9:
						    	msg="neck mobilization";
						    break;
						}
						$('#activ').html(msg);
						$('#activ').show(750,"swing");
					});					
					
					
			}
		},100);
	}
}});