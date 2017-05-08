$(document).ready(function(){
  /*How do you access the whole API?*/
  var spotifyAPI = "https://api.spotify.com/v1/search";

  var search = $("#search").val();
  var spotifyOptions = {
    q: search,
    type: "album"
  }


  function displayPhotos(data){
    var photoHTML = '<ul>';
    $.each(data.artists, function(i, item){
        photoHTML += '<li>';
        photoHTML += '<a href="' + item.external_urls.spotity + '"class = "image" >';
        photoHTML += '<img src= "' + item.href + ' "></a></li>';
    });

    photoHTML += '</ul>';
    $("#photos").html(photoHTML);

  }

  $.getJSON(spotifyAPI, spotifyOptions, displayPhotos);

});







/*$(document).ready(function(){

  var spotifyAPI = "https://api.spotify.com/v1/albums/0BXLS9qmuyBT9T6tIfAigJ";

  var spotifyOptions = {
    album_type: "album",
    id: "BXLS9qmuyBT9T6tIfAigJ"
  }


  function displayPhotos(data){
    var photoHTML = '<ul>';
    $.each(data.artists, function(i, item){
        photoHTML += '<li>';
        photoHTML += '<a href="' + item.external_urls.spotity + '"class = "image" >';
        photoHTML += '<img src= "' + item.href + ' "></a></li>';
    });

    photoHTML += '</ul>';
    $("#photos").html(photoHTML);

  }

  $.getJSON(spotifyAPI, spotifyOptions, displayPhotos);

});
