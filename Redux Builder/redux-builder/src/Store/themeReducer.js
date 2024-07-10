
import { THEME_CHANGE } from './action';

const initialState = {
    theme: 'light',
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default themeReducer;