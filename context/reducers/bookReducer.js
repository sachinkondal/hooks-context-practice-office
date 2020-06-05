export const bookReducer = (state, action) => {
    console.log('action', state,action)
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, {title:action.book.title, id:Math.floor(Math.random() * Math.floor(1000))}]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}   