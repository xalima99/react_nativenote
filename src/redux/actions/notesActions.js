export const addNote = (note) => {
    return {
        type: 'ADD',
        payload: note
    }
}


export const deleteNote = (id) => {
    return {
        type: 'DELETE',
        payload: {id}
    }
}


export const getNotes = () => {
    return {
        type: 'GET'
    }
}


export const editNote = (item) => {
    return {
        type: 'EDIT',
        payload: item
    }
}