
const initialState = {
    note: [
        {id: 1, title: 'yo', description: 'male'},
        {id: 2, title: 'yo', description: 'male'},
        {id: 3, title: 'yo', description: 'male'},
        {id: 4, title: 'yo', description: 'male'},
        {id: 5, title: 'yo', description: 'male'},
    ]
}


export default notesReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET':
            return {
                ...state
            }
        case 'ADD':{
            return {
                ...state,
                note: [...state.note, action.payload]
            }
        }
        case 'DELETE': {
            return{
                ...state,
                note: state.note.filter(note => note.id !== action.payload.id )
            }
        }
        case 'EDIT' : {
            return {
                ...state,
                note: state.note.map(note => {
                    return note.id === action.payload.id ? Object.assign({}, note, {...action.payload}) : note
                })
            }
        }
        default:
            return state
        
    }
}