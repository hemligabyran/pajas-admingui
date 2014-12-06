var browser = {};
browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
browser.webkit  = /webkit/.test(navigator.userAgent.toLowerCase());
browser.opera   = /opera/.test(navigator.userAgent.toLowerCase());
browser.msie    = /msie/.test(navigator.userAgent.toLowerCase());
browser.msie_old = false;

//************ Post Render functionality ***********************************
	// Add functionality that depend on rendered behavior here.

//************ Document ready            ************************************

	$(document).ready(function(){

		//************ Setups                  ************************************
			if(browser.msie){
				$('html').addClass('ie');
				if ($('html').hasClass('no-cssgradients'))
					browser.msie_old = true;
			}

			function isChrome(){
				return Boolean(window.chrome);
			}

			// Date-time - dont do this on chrome and mobile-devices.
				if((!isChrome()) && ($('body').css('max-width') != '800px')){
					$('.datetime').datetimepicker(
					{
						'dayNamesMin': ['Sö','Må','Ti','On','To','Fr','Lö'],
						'monthNames' : ['Januari','Februari', 'Mars', 'April', 'Maj', 'Juni','Juli','Augusti','September','Oktober','November','December'],
						'dateFormat' : 'yy-mm-dd',
						'currentText': 'Nu',
						'closeText'  : 'Forsätt ›',
						'timeText'   : 'Klockan: ',
						'hourText'   : 'Timme: ',
						'minuteText' : 'Minut: ',
						'firstDay'   :  1
					});
				}

		//************ Generic functionality   ************************************
			$('body').on('change', '.autosubmit', function(){
				$(this).closest('form').submit();
			});

			$('body').on('click', 'a.no_refresh', function(){
				e.preventDefault();
				$.get($(this).attr('href'));
			});

			$('body').on('click', '.hide_parent', function(){
				$(this).closest('.parent').hide();
			});

			$('body').on('click', '.remove_parent', function(){
				$(this).closest('.parent').remove();
			});

			// Only allow numbers in numval classed boxes
			$('input.numval').on('change', function(e) {
				var val = $(this).val();

				val = val.replace(',', '.');
				val = val.replace(/[^\d.-]/g, '');
				val = val.replace(/^00/, '');

				if (val.replace('.', '') != val)
					val = removeAllButLast(val, '.');

				$(this).val(val);
			});

	});

//************ Global functions          ************************************

	function removeAllButLast(string, token) {
		var parts = string.split(token);
		return parts.slice(0,-1).join('') + token + parts.slice(-1)
	}