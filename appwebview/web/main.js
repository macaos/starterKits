(function () {
	$(document).ready(function () {
		var count = 0;
		var run = [];
		var isPause = false;
		var pauseTime = null;
		let setting = {
			rest: 5,
			work: 15,
			repeat: 3
		}

		init();

		function init() {
			$("#set").show();
			$("#run").hide();
			let html = '';
			for (let i = 1; i <= 60; i++) {
				html += `<option value="${i}">${i}</option>`;
			}
			let htmlMoretime = html;
			htmlMoretime += `
			<option value="70">1' 10"</option>
			<option value="80">1' 20"</option>
			<option value="90">1' 30"</option>
			<option value="100">1' 40"</option>
			<option value="110">1' 50"</option>
			<option value="120">2'</option>
			<option value="150">2' 30"</option>
			<option value="180">3'</option>
			<option value="210">3' 30"</option>
			<option value="240">4'</option>
			<option value="270">4' 30"</option>
			<option value="300">5'</option>
			`
			$('#rest-val').html(html);
			$('#work-val').html(htmlMoretime);
			$('#repeat-val').html(html);
			$(`#rest-val`).on('change', () => {
				setVal('select_rest', getVal('select_rest'));
				// $(`#rest-val`).parent().find('.print-select').text(getVal('select_rest'));
			});
			$(`#work-val`).on('change', () => {
				setVal('select_work', getVal('select_work'));
				// $(`#work-val`).parent().find('.print-select').text(getVal('select_work'));
			});
			$(`#repeat-val`).on('change', () => {
				setVal('select_repeat', getVal('select_repeat'));
				// $(`#repeat-val`).parent().find('.print-select').text(getVal('select_repeat'));
			});
			$('.btn-pause').on('click', () => {

				isPause = true;
				console.log('onbtnpause', isPause)
				$('.view-pause').addClass('show');
			});
			$('.btn-removepause').on('click', () => {
				isPause = false;
				timer(pauseTime);
				pauseTime = null;
				$('.view-pause').removeClass('show');
				console.log('removepause', isPause)
			});

			setTimeout(() => {
				setVal('select_rest', setting.rest);
				setVal('select_work', setting.work);
				setVal('select_repeat', setting.repeat);
			});
		}
		function setVal(code, value) {
			console.log('setVal', code, value);
			var $el;
			if (code === 'select_rest') {
				$(`#rest-val > option`).attr("selected", false);
				$(`#rest-val > option[value=${value}]`).prop("selected", "true");
				$(`#rest-val`).parent().find('.print-select').text(value);
				setting.rest = Number(value);
				$('#set').hide().show();
			} else if (code === 'select_work') {
				$(`#work-val > option`).attr("selected", false);
				$(`#work-val > option[value=${value}]`).prop("selected", "true");
				$(`#work-val`).parent().find('.print-select').text(value);
				setting.work = Number(value);
				$('#set').hide().show();
			} else if (code === 'select_repeat') {
				$(`#repeat-val > option`).attr("selected", false);
				$(`#repeat-val > option[value=${value}]`).prop("selected", "true");
				$(`#repeat-val`).parent().find('.print-select').text(value);
				setting.repeat = Number(value);
				$('#set').hide().show();
			}
		}
		function getVal(code) {
			if (code === 'select_rest') {
				return $(`#rest-val > option:selected`).val();
			} else if (code === 'select_work') {
				return $(`#work-val > option:selected`).val();
			} else if (code === 'select_repeat') {
				return $(`#repeat-val > option:selected`).val();
			}
			return '';
		}

		window.changeQty = (rel, changeVal) => {
			console.log('rel', setting[rel], rel, changeVal)
			setting[rel] = setting[rel] + changeVal;
			setTimeout(() => {
				console.log('setting[rel]', setting[rel]);
				if (setting[rel] < 1) setting[rel] = 1;
				if (setting[rel] > 60) setting[rel] = 60;
				setVal(`select_${rel}`, setting[rel]);
			})
			// value = $("input#" + rel).val();
			// if (status == "plus") {
			// 	var num = +$("input#" + rel).val() + 1;
			// 	$("input#" + rel).val(num);
			// } else {
			// 	if (value > 1) {
			// 		var num = +$("input#" + rel).val() - 1;
			// 		$("input#" + rel).val(value - 1);
			// 	}
			// }
		}

		function draw(type) {
			var el = document.getElementById("graph");
			var options = {
				percent: el.getAttribute("data-percent") || 25,
				size: el.getAttribute("data-size") || 240,
				lineWidth: el.getAttribute("data-line") || 1,
				rotate: el.getAttribute("data-rotate") || 0,
				color: el.getAttribute("data-color") || "#fff",
			};
			var canvas = document.createElement("canvas");
			var span = document.createElement("span");
			//span.textContent = options.percent + '%';
			if (typeof G_vmlCanvasManager !== "undefined") {
				G_vmlCanvasManager.initElement(canvas);
			}

			var ctx = canvas.getContext("2d");
			canvas.width = canvas.height = options.size;

			el.appendChild(span);
			el.appendChild(canvas);

			ctx.translate(options.size / 2, options.size / 2);
			ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

			var radius = (options.size - options.lineWidth) / 2;

			var drawCircle = function (color, lineWidth, percent) {
				percent = Math.min(Math.max(0, percent || 1), 1);
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
				ctx.strokeStyle = color;
				ctx.lineCap = "round"; // butt, round or square
				ctx.lineWidth = lineWidth;
				ctx.stroke();
			};

			if (type === 0) {
				drawCircle("#fff", options.lineWidth, 100 / 100);
			}
			if (type === 1) {
				drawCircle(options.color, options.lineWidth, 100 / 100);
				drawCircle("#fff", options.lineWidth, options.percent / 100);
			}
			if (type === 2) {
				drawCircle(options.color, options.lineWidth, 100 / 100);
				drawCircle("#fff", options.lineWidth, 0 / 100);
			}
		}

		$("#start").click(function () {
			isPause = false;
			$("#graph").empty();
			$("#set").hide();
			$("#run").show();
			var intervals = getVal('select_repeat');
			var workout = getVal('select_work');
			var rest = getVal('select_rest');

			for (i = 0; i < intervals; i++) {
				run.push(rest);
				run.push(workout);
			}
			count = 0;
			draw(0);
			timer(run[0]);
			$("#set").hide();
			console.log(run);
			return false;
		});

		function timer(seconds) {
			var total = run.length;
			var remaningTime = seconds;
			var theSecs = run[count];

			start = setTimeout(function () {
				if (isPause) {
					pauseTime = remaningTime;
					return;
				}
				$("#run").removeClass("go");
				$("#run").removeClass("rest");
				if (seconds > 0) {
					if (remaningTime == 1) {
						$('#mp3-one').get(0).play();
					} else if (remaningTime == 2) {
						$('#mp3-two').get(0).play();
					} else if (remaningTime == 3) {
						$('#mp3-three').get(0).play();
					} else if (remaningTime == 10) {
						$('#mp3-ten').get(0).play();
					}
					// document.getElementById("timer").innerHTML = remaningTime;
					const dpRemaningTime = (() => {
						if (remaningTime <= 60) {
							return remaningTime;
						}
						let s = remaningTime % 60;
						// if(s > 0){
						// 	s = s+'s';
						// } else {
						// 	s = '';
						// }
						const ms = `${parseInt(remaningTime / 60)}m ${s}s`
						return ms;
					})();
					document.getElementById("timer").innerHTML = dpRemaningTime;
				} else {
					document.getElementById("timer").innerHTML = "";
				}


				var test = (remaningTime / theSecs) * 100;
				if (remaningTime > 0) {
					$("#graph").attr("data-percent", test);
					$("#graph").empty();
					draw(1);
					timer(remaningTime - 1);
				}
				if (remaningTime <= 0) {
					$("#graph").attr("data-percent", 100);
					$("#graph").empty();
					draw(0);
					count = count + 1;
					timer(run[count]);
				}
			}, 1000);
			var setHTML = `
			<span class="txt1">${(parseInt(count / 2) + 1)}</span> 
			<span class="divide">/</span> 
			<span class="txt2">${(total / 2)}</span>`;

			$("#dp-set").html(`${setHTML}`);
			if (count >= total) {
				$('#mp3-finish').get(0).play();
				document.getElementById("title").innerHTML = "FINISHED";
				document.getElementById("timer").innerHTML = "";
				clearInterval(start);
				$("#graph").empty();
				$("#stop").trigger("click");
			} else if (count % 2 == 0) {
				if (count === 0) {
					// 바뀔때만 사운드 플레이 
					if (document.getElementById("title").innerHTML != "READY") {
						$('#mp3-ready').get(0).play();
					}
					document.getElementById("title").innerHTML = "READY";
					$("#graph").attr("data-color", "#5a5a5a");
					$("#run").addClass("ready");
				} else {
					// 바뀔때만 사운드 플레이 
					if (document.getElementById("title").innerHTML != "REST") {
						$('#mp3-rest').get(0).play();
					}
					document.getElementById("title").innerHTML = "REST";
					$("#graph").attr("data-color", "#0c4e3b");
					$("#run").addClass("rest");
				}

			} else {
				// 바뀔때만 사운드 플레이 
				if (document.getElementById("title").innerHTML != "GO!!") {
					$('#mp3-go').get(0).play();
				}
				document.getElementById("title").innerHTML = "GO!!";
				$("#run").addClass("go");
				$("#graph").attr("data-color", "#681d17");
			}
		}

		$("#stop").click(function () {
			clearInterval(start);
			run.length = 0;
			$("#set").show();
			document.getElementById("title").innerHTML = "";
			$("#timer").empty();
			$("#graph").attr("data-percent", 100);
			$("#graph").empty();
			draw(2);
			return false;
		});
	});
})();
