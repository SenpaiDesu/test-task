import ajax from '../config/ajax';
import { REGIONS_LOAD_SUCCESS, REGION_SELECTED, DROPLIST_VISIBLE_CHANGED } from '../config/const';

export const getRegions = () => dispatch => {
    ajax.get('regions').then(result => {
        dispatch({
            type: REGIONS_LOAD_SUCCESS,
            payload: result.data
        });
    });
}

export const selectRegion = (region) => dispatch => {
    dispatch({
        type: REGION_SELECTED,
        payload: region
    });
}



