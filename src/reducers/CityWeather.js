const initialState = {
  isLoading: false,
  firstLoading:true,
  weather: null
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_CITY': {
      return {
        ...state,
        error:null,
        isLoading: true
      };
    }
    case 'REQUEST_CITY_SUCCES': {
      return {
        ...state,
        weather:action.city,
        isLoading: false,
        firstLoading:false
      };
    }
    case 'REQUEST_CITY_ERROR': {
      return {
        ...state,
        isLoading: false,
        firstLoading:false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};