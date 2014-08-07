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
			$('.autosubmit').change(function(e){
				$(this).closest('form').submit();
			});

			$('a.no_refresh').click(function(e){
				e.preventDefault();
				$.get($(this).attr('href'));
			});

			$('.hide_parent').click(function(e){
				$(this).closest('.parent').hide();
			});

			$('.remove_parent').click(function(e){
				$(this).closest('.parent').remove();
			});

	});