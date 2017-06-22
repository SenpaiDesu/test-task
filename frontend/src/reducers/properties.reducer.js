import { PROPERTIES_LOAD_SUCCESS } from '../config/const';

export default (state = [], action) => {
    switch (action.type){
        case PROPERTIES_LOAD_SUCCESS: {
            state = action.payload;
            break;
        }
        //other action.types for more difficult tasks
    }
    return state;
}