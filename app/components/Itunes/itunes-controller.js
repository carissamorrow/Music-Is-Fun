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

      <div class="col-12">
      <div class="row-justify-content-center">
      <img src= "${song.albumArt}">
          <p> "${song.title}></p>
          <p> "${song.artist}></p>
          <p> "${song.collection}></p>
          <p> "${song.price}></p>
          </div>
          </div>
      <div class="col-4">
      <div class="row-justify-content-center">
          <audio controls>
              <source  src="${song.preview}" type="">
          </audio>
      </div>
      </div>
      `

    document.getElementById('songs').innerHTML = template
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