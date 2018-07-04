const initialState = {};

export const favoriteCities = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY': {
      return {
        ...state,
        [action.id]: {
          ...action.weather,
          refreshing:false
        }
      };
    }
    case 'DELETE_CITY': {
      const removeProperty = (obj, property) => {
        return  Object.keys(obj).reduce((acc, key) => {
          if (key !== property) {
            return { ...acc, [key]: obj[key] };
          }
          return acc;
        }, {});
      };
      const newState = removeProperty(state, action.id);

      return newState;
    }
    case 'REQUEST_REFRESH_CITY': {
      return {
        ...state,
        [action.cityId]: {
          ...state[action.cityId],
          refreshing:true
        }
      };
    }
    case 'REQUEST_REFRESH_CITY_SUCCES': {
      return {
        ...state,
        [action.cityId]: {
          ...action.weather,
          refreshing:false
        }
      };
    }
    case 'REQUEST_REFRESH_CITY_ERROR': {
      return {
        ...state,
        [action.cityId]: {
          ...action.weather,
          refreshing:false,
          error:action.error
        }
      };
    }
    default: {
      return state;
    }
  }
};