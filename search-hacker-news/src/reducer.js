import { REMOVE_STORY, SEARCH_STORY, SET_LOADING, SET_STORIES } from "./actions";

export const reducer = (state, action) => {
    switch(action.type){
        case SET_LOADING: 
        return{...state, isLoading:true};

        case SET_STORIES:
            return{...state, isLoading:false, hits:action.payload.hits, nbPages:action.payload.nbPages}
            
        case REMOVE_STORY:
           const newHits = state.hits.filter((x)=> x.objectID != action.payload)
            return {...state,  hits: newHits }

        case SEARCH_STORY:
            return {...state, query: action.payload, page:0 }


        default:
            throw new Error(`no matching "${action.type}" action type`)
    }
};
