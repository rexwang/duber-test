export const retailers = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.data.retailers.filter(retailer => {
        return retailer.distance <= 20;
      }) || state;

    case 'FAILED_REQUEST':
      console.log(action);
      return state;

    default:
      return state || [];
  }
};
