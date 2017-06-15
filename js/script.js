// var $mainHeader = $('#main-header');
// $mainHeader.html("Hello");
$('#random-gif-btn').click(function(){
	$.get( "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&", function( data ) {
		var img = '<img src=" ' + data.data.image_url+ ' " >'
		$("#rndm-gif-container").html(img);
		console.log(data);
	});
});

