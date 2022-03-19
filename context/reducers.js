export default function (state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      const {todo} = action.payload;
      const newList = [...state.toDoList, todo];
      return {...state, toDoList: newList};

    default:
      return state;
  }
}
