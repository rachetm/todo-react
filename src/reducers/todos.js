const todos = (
  state = {
    items: [],
    filtered_items: [],
    value: ""
  },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now(),
            content: action.content,
            checked: false
          }
        ],
        value: ""
      };

    case "REMOVE_TODO":
      return {
        ...state,
        items: state.items.filter(item => {
          return item.id !== action.id;
        })
      };

    case "MARK_CHECKED":
      return {
        ...state,
        items: state.items.map(item => {
            if(item.id === action.id) item.checked = !item.checked;
            return item;
        })
      };

    case "SEARCH":
      if (!(action.keyword === "")) {
        return {
          ...state,
          filtered_items: state.items.filter(item => {
            const keyword = new RegExp(`${action.keyword}`, "i");
            return keyword.test(item.content);
          })
        };
      } 
      else 
        return { ...state, filtered_items: [] };

    default:
      return state;
  }
};

export default todos;
