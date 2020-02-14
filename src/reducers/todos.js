const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(),
                    content: action.content,
                    checked: false
                }
            ];

        case 'REMOVE_TODO':
            return state.filter(item => {
              return item.id !== action.id;
            });

        case 'MARK_CHECKED':
            return state.map(item => {
              if (item.id === action.id) item.checked = item.checked ? false : true;
              return item;
            });

        default:
            return state;
    }
}

export default todos;