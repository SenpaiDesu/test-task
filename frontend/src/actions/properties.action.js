import ajax from '../config/ajax';
import { PROPERTIES_LOAD_SUCCESS } from '../config/const';

export const getPropertiesByRegion = (region) => dispatch => {
    ajax.get('regions', { region }).then(result => {
        dispatch({
            type: PROPERTIES_LOAD_SUCCESS,
            payload: result.data.objects
        });
    });
}