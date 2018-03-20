// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var myPlaylist = {
	title: "Believer",
	songlength: "3:36",
	artist: "Imagine Dragons",
	mp3Url: "https://youtu.be/7wtfhZwyrcc",
	imageUrl: "https://4.bp.blogspot.com/-WUV9b3DzIMY/WJa78tRIiWI/AAAAAAAACCI/H4SnGtsd5AcuSvsPVjOCEz7TM3-Q6LycgCLcB/s1600/cover600x600-1564.jpg",

}

var myPlay



// DOCUMENT READY FUNCTION
$(document).ready(function() {
    var myPlayList = [{
		"title": "24K Magic",
		"artist": "Bruno Mars",
		"mp3Url": "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title": "Sir Duke",
		"artist": "Stevie Wonder",
		"mp3Url": "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title": "Sorry",
		"artist": "Justin Bieber",
		"mp3Url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageUrl": "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	},
	{
	   "title": "Believer",
   	   "songlength": "3:36",
	   "artist": "Imagine Dragons",
	   "mp3Url": "https://youtu.be/7wtfhZwyrcc",
	   "imageUrl": "https://4.bp.blogspot.com/-WUV9b3DzIMY/WJa78tRIiWI/AAAAAAAACCI/H4SnGtsd5AcuSvsPVjOCEz7TM3-Q6LycgCLcB/s1600/cover600x600-1564.jpg",

}
	];

 
	for (var i = 0; i < myPlayList.length; i = i + 1) {
	  $(".songs").append("<p>" + myPlayList[i].title + "</p>");
	  $(".songs").append("<p>" + myPlayList[i].artist + "</p>");
	  $(".songs").append("<a href=" + myPlayList[i].mp3Url + ">mp3Url</a>");
	  $(".songs").append("<img src= " + myPlayList[i].imageUrl + ">");
		
	}

$("button").click(function() {
	var songTitle = $("#Title").val();
	var songArtist = $("#artist").val();
	var songImgLink = $("#imgLink").val();
	var songLink = $("#link").val();
	
	var newSong = {
		title: songTitle,
		artist: songArtist,
		imgLink: songImgLink,
		link: songLink
	};
console.log(newSong);

});
});

	function displayList() {
	}

	function clearList() {
	}

	function addSong() {
	}
