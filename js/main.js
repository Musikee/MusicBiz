$(function(){
	window.fnames = new Array();
	window.ftypes = new Array();
	fnames[0]='EMAIL';
	ftypes[0]='email';
	var $mcj = jQuery.noConflict(true);
	if(window.location.hash == '#thanks'){
		$('#thanks-dialog').modal();
		$('#mc_embed_signup').hide();
		$('#signedup').show();
	}
});

var fbShare = function(url){
	window.open('https://www.facebook.com/dialog/share?app_id=1450714908506163' + 
				'&href=' + encodeURIComponent(url),
				'fbwindow', 
	            'height=623, width=556, top=' + (window.innerHeight/2 - 623/2) + ', left=' + (window.innerWidth/2 - 556/2) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
};

var twShare = function(url, text){
	window.open('https://twitter.com/intent/tweet' + 
				'?url=' + encodeURIComponent(url) +
				'&text=' + encodeURIComponent(text) + 
				'&related=musikee_com',
				'twwindow', 
	            'height=253, width=723, top=' + (window.innerHeight/2 - 253/2) + ', left=' + (window.innerWidth/2 - 723/2) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
};