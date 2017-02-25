var songsterr_Endpoint_URL = 'http://www.songsterr.com/a/wa/';

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
			resultElement += '<a href="https://www.songsterr.com/a/wa/bestMatchForQueryString?a='+item.id + 'inst=bass"></a>'
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
	});
}

$(function(){eventHandler();});