
export default class FavoritesPageState {
  static EMPTY = new FavoritesPageState()

  /** @type {Boolean} */ isLoading = true;
  /** @type {Boolean} */ isLoaded = false;
  
  constructor(props) {
    Object.assign(this, props)
  }
}