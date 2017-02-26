var songsterr_Endpoint_URL = 'https://www.songsterr.com/a/ra/songs/byartists.json';

function getDataFromSongsterr (artistName, callback){
	var query = {
		artists: artistName
	}
	$.getJSON(songsterr_Endpoint_URL, query, callback)
}

function displaySearchResults(data){
	var resultElement = '';
	if(data){
		data.forEach(function(item){
			resultElement += '<a href="https://www.songsterr.com/a/wa/song?id='+item.id+'"target="_blank">'+item.title+' <br><br> </a>'
			console.log(resultElement);
		});
	}
	else{
		resultElement += '<p>No results </p>'
	}
	$('.results_section').html(resultElement);
}

function eventHandler(){
	$('.search_Songsterr').submit(function(e){
		e.preventDefault();
		var query = $(this).find('#artist_name').val();
		getDataFromSongsterr(query, displaySearchResults);
	});
}

$(function(){eventHandler();});