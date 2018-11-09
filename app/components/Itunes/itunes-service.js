import Song from "../../models/Song.js";

//DO NOT MODIFY
class ItunesService {

  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    return $.getJSON(url).then(function (response) {

      var songList = response.results.map(s => {
        return new Song(s)
      })
      return songList;
    })
  }

}

export default ItunesService