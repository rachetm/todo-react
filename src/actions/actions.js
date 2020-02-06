const addTodo = content => {
    return {
        type: "ADD_TODO",
        content: content
        }
}

const removeTodo = id => {
    return {
        type: "REMOVE_TODO",
        id: id
    }
}

const mark_checked = id => {
    return {
        type: "MARK_CHECKED",
        id: id
    }
}

const searchTodo = keyword => {
    return {
        type: "SEARCH",
        keyword
    }
}

export {addTodo, mark_checked, removeTodo, searchTodo}