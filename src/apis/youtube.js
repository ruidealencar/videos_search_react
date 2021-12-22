import axios from 'axios';

const KEY = 'AIzaSyC5tg2HwoEVjaHD0WKMV-KXSD4X42seUBE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
