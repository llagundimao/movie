export default class ApplicationState {
  static EMPTY = new ApplicationState()

  /** @type {Object} */ data = null
  /** @type {array} */ genres = []
  /** @type {array} */ favorites = []
  /** @type {Boolean} */ isLoading = true
  /** @type {Boolean} */ isLoaded = false

  constructor(props) {
    Object.assign(this, props)
  }
  
  getLoadingStatus() { 
    return this.isLoaded
  }
}