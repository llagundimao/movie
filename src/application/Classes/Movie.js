export default class Movie {
  static EMPTY = new Movie();

  /** @type {Boolean} */ adult = false
  /** @type {String} */  backdrop_path = null
  /** @type {Array} */ genre_ids = []
  /** @type {Number} */ id = 0
  /** @type {String} */ original_language = null
  /** @type {String} */ original_title = null
  /** @type {String} */ overview = null
  /** @type {Number} */ popularity = 0
  /** @type {String} */ poster_path = null
  /** @type {String} */ release_date = null
  /** @type {String} */ title = null
  /** @type {Boolean} */ video = false
  /** @type {Number} */ vote_average = 0
  /** @type {Number} */ vote_count = 0
  /** @type {Boolean} */ isFavorite = false

  constructor(props) {
    Object.assign(this, props)
  }
};
