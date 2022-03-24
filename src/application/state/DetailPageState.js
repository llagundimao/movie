import Movie from '../Classes/Movie';

export default class DetailPageState extends Movie {
  static EMPTY = new DetailPageState()


  constructor(props) {
    super()

    this.isFavorite = false
    Object.assign(this, props)
  }
}