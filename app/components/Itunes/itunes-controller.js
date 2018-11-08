import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE

  let template = ''
  for (let i = 0; i < results.length; i++) {
    let song = results[i];
    template += `

      <div class="col-6">
      <div row="">
      <img src= "${song.albumArt}"
          <p class= "${song.title}></p>
          <p class= "${song.artist}></p>
          <p class= "${song.collection}></p>
          <p class= "${song.price}></p>
          <p class= "${song.preview}></p> 
        </div>
      </div>
      `

    document.getElementById('song-list').innerHTML = template
  }

}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController