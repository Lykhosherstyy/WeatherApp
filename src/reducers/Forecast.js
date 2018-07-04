const initialState = {
  isLoading: false,
  forecast: null,
  error:null
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FORECAST': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'REQUEST_FORECAST_SUCCES': {
      return {
        ...state,
        forecast:action.forecast,
        islLoading: false
      };
    }
    case 'REQUEST_FORECAST_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};