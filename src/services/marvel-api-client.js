import CryptoJS from 'crypto-js';

class MarvelHeroes {
  PRIV_KEY = 'd77e1e1bebcc091397f6e711fd5b4e43f3f2793d';

  PUBLIC_KEY = 'e38349e2b82ef41ad55915dcb2284ac5';

  baseUrl = 'https://gateway.marvel.com/v1/public/';

  ts = new Date().getTime();

  hash = CryptoJS
    .MD5(this.ts + this.PRIV_KEY + this.PUBLIC_KEY)
    .toString();

  charUrl = `?limit=100&ts=${this.ts}&apikey=${this.PUBLIC_KEY}&hash=${this.hash}`;

  getMarvelResponse = async url => {
    const res = await fetch(`${this.baseUrl}${url}${this.charUrl}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`
        + `, received ${res.status}`);
    }

    return res.json();
  };

  async getAllCharacters() {
    const res = await this.getMarvelResponse('characters');
    return res.data.results;
  }

  getCharacter(id) {
    return this.getMarvelResponse(`characters/${id}`);
  }
}

export default MarvelHeroes;
