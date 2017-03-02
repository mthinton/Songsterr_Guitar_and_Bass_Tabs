var songsterr_Endpoint_URL = 'http://www.songsterr.com/a/ra/songs.json';

function getDataFromSongsterr (artistName, callback){//This is the request for songs from a particular artist
	var query = {
		pattern: artistName
	}
	$.getJSON(songsterr_Endpoint_URL, query, callback)
}

function displaySearchResults(data){//This displays to the div 'results_sections'
	var resultElement = '';
	if(data){
		data.forEach(function(item){
			resultElement += '<a href="https://www.songsterr.com/a/wa/song?id='+item.id+'"target="_blank">'+item.title+' <br><br> </a>'
		});
	}
	else{
		resultElement += '<p> No results </p>'
	}
	$('.results_section').html(resultElement);
}

function eventHandler2(){//this gets the artist name, turns it into a string, and we pass this into getDataFromSongsterr
	$('.search_Songsterr').submit(function(e){
		e.preventDefault();
		var query = $(this).find('#artist_name').val();
		getDataFromSongsterr(query, displaySearchResults);
	});
}

$(function(){;eventHandler2();});


