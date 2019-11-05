// basic functionalities

$(document).ready(function() {
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
	client.on("connect", function(){
		console.log("Successfully connected");
	})
	client.on("message", function (topic, payload) {
		console.log("Received { topic:"+topic+"; payload: "+payload+" }");
		switch (topic) {
			case "Mars/Ners":
				$('#nm').val(payload);
				break;
			case "iran/toring":
				$('#jj').val(payload);
				break;
			case "janeGrace/temp":
				$('#gm').val(payload);
				break;
			case "dugta/temp":
				$('#cn').val(payload);
				break;
			case "Madam/temp":
				$('#mj').val(payload);
				break;
			case "patfaye/temp":
				$('#jf').val(payload);
				break;
			case "yuJudy/temp":
				$('#ym').val(payload);
				break;
			case "ricameo/temp":
				$('#rr').val(payload);
				break;
			case "leajay/temp":
				$('#lj').val(payload);
				break;
			case "rangiegwapo/temp":
				$('#rj').val(payload);
				break;
			case "ajocTemp":
				$('#aa').val(payload);
				break;
			case "tina/joey":
				$('#jc').val(payload);
				break;
		}
	})
	client.subscribe({
		'Mars/Ners' :{qos:0},
		'iran/toring' : {qos:0},
		'janeGrace/temp': {qos:0},
		'dugta/temp': {qos:0},
		'Madam/temp': {qos:0},
		'patfaye/temp': {qos:0},
		'yuJudy/temp': {qos:0},
		'ricameo/temp': {qos:0},
		'leajay/temp': {qos:0},
		'rangiegwapo/temp': {qos:0},
		'ajocTemp': {qos:0},
		'tina/joey': {qos:0},
		})
		
})