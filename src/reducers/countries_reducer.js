export default function (state = [], action) {
  switch (action.type) {
    case 'GET_All_DATA':
      return action.payload;
    default:
      return state;
  }
}
