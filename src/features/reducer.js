const initialState = {
    searchTerms: []
}
    

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_SEARCH': {
            console.log(action)
            return {
                ...state,
                searchTerms: [
                    ...state.searchTerms, action.payload
                ]
            }
        }
        default: return state
    }
}

