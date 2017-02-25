var songsterr_Endpoint_URL = 'https://www.songsterr.com/a/rest/';

function getDataFromSongsterr (artistName, callback){
	var query = {
		a: 'artistName',
	}
	$.getJSON(songsterr_Endpoint_URL, query, callback)
}

function displaySearchResults(data){
	var resultElement = '';
	if(data.items){
		data.items.forEach(function(item){
			resultElement += '<a href="https://www.songsterr.com/a/wa/artist?id='+item.id+'"></a>'
		});
	}
	else{
		resultElement += '<p>No results </p>'
	}
	$('results_section').html(resultElement);
}

function eventHandler(){
	$('.search_Songsterr').submit(function(e){
		e.preventDefault();
		var query = $(this).find('#artist_name').val();
		getDataFromSongsterr(query, displaySearchResults);
		console.log($('#artist_name'));
	});
}

$(function(){eventHandler();});