import ajax from '../config/ajax';
import { PROPERTIES_LOAD_SUCCESS } from '../config/const';

export const getPropertiesByRegion = (id) => dispatch => {
    ajax.get(`properties/${id}`).then(result => {
        dispatch({
            type: PROPERTIES_LOAD_SUCCESS,
            payload: result.data
        });
    });
}