const allFavorites = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'LOAD_FAVORITES':
      return action.allFavorites
    case 'TOGGLE_FAVORITE':
      let removal = state.filter((val, index) => {
        if(val.title !== action.film.title) {
          return val
        }
      })
      if(removal.length < state.length) {
        return removal
      } else {
        let tempState = state
        tempState[tempState.length] = action.film
        return tempState
      }
    case 'RESET_FAVORITES':
      return []
    default:
      return state
    }
  }

export default allFavorites
