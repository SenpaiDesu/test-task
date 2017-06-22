import { PROPERTIES_LOAD_SUCCESS } from '../config/const';

const initState = () => {
    return {
        data: []
    }
}

export default (state = initState(), action) => {
    switch (action.type){
        case PROPERTIES_LOAD_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        };
        default: return state;
        //other action.types for more difficult tasks
    }  
}