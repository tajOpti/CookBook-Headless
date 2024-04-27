// Initial State
const initialState = {
    model: {},
    modelLoaded: false,
    status: 'Unknown',
};

const epiDataModelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MODEL':
            return {
                ...state,
                model: action.payload.model || {},
                modelLoaded: action.payload.status === 'Resolved',
                status: action.payload.status,
            };
        default:
            return state;
    }
};

export default epiDataModelReducer;
