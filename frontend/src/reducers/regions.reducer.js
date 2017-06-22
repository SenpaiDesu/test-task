import { REGIONS_LOAD_SUCCESS, REGION_SELECTED, DROPLIST_VISIBLE_CHANGED } from '../config/const';

const initState = () => {
    return {
        data: [],
        selected: {},
        visible: false
    }
}

export default (state = initState(), action) => {
    switch (action.type){
        case REGIONS_LOAD_SUCCESS: {
            return {
                ...state,
                data: action.payload
            };
        };
        case REGION_SELECTED: {
            return {
                ...state,
                selected: action.payload
            };
        };
        case DROPLIST_VISIBLE_CHANGED: {
            return {
                ...state,
                visible: !state.visible
            }
        }
        default: {
            return state;
        }
        //other action.types for more difficult tasks
    }
}