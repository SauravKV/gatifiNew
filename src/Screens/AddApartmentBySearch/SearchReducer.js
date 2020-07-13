const initialState={
    searchText:''
}

const searchReducer=(state=initialState,action)=>{
    if(action.type=='SEARCH_TEXT'){
        return{...state,searchText:action.payload}

    }else{
        return state;
    }

}
export default searchReducer;