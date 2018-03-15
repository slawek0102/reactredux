

export default function(state = [], action) {

  switch (action.type) {
    case 'GET_All_DATA':

      console.log("Action", action.payload);


    default:
      return state;
  }
}


