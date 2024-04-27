// Initial State
const initialState = {
    inEditMode: false,
    isEditable: false,
};

const epiContextReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CONTEXT':
            return {
                ...state,
                isEditable: action.payload.isEditable,
                inEditMode: action.payload.inEditMode,
            };
        default:
            return state;
    }
};

export default epiContextReducer;
