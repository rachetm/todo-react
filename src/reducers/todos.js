const todos = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { items = [] } = state;
      return {
        ...state,
        items: [
          ...items,
          {
            id: Date.now(),
            content: action.content,
            checked: false
          }
        ]
      };
    }

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
          if (item.id === action.id) item.checked = !item.checked;
          return item;
        })
      };

    case "SEARCH": {
      // const {filtered_items = []} = state;
      const { items = [] } = state;

      if (!(action.keyword === "")) {
        return {
          ...state,
          filtered_items: items.filter(item => {
            const keyword = new RegExp(`${action.keyword}`, "i");
            return keyword.test(item.content);
          })
        };
      } else return { ...state, filtered_items: [] };
    }

    default:
      return state;
  }
};

export default todos;
