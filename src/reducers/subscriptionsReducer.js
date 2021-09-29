const initialState = {
  addSubscription: {},
  subscriptionType: '',
  subscriptionData: {},
  updateSubscription: {},
  subscriptionId: '',
};

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBSCRIPTION':
      let input = action.input;
      let detail = action.detail;
      return {
        ...state,
        addSubscription: { ...state.addSubscription, [detail]: input },
      };
    case 'RESET_ADD_SUBSCRIPTION':
      let reset = action.reset;
      return {
        ...state,
        addSubscription: reset,
      };

    case 'FIND_SUBSCRIPTION':
      let subscription = action.input;
      return {
        ...state,
        subscriptionType: subscription,
      };

    case 'STORE_SUBSCRIPTION_DATA':
      const data = action.data;
      return {
        ...state,
        subscriptionData: data,
      };
    case 'RESET_SUBSCRIPTION_DATA':
      let resetData = action.reset;
      return {
        ...state,
        subscriptionData: resetData,
      };
    case 'STORE_SUBSCRIPTION_ID':
      const id = action.id;
      return { ...state, subscriptionId: id };

    case 'UPDATE_SUBSCRIPTION':
      let update = action.input;
      let subscriptionDetail = action.detail;
      return {
        ...state,
        updateSubscription: {
          ...state.updateSubscription,
          [subscriptionDetail]: update,
        },
      };

    case 'RESET_UPDATE_SUBSCRIPTION':
      let updateReset = action.reset;
      return {
        ...state,
        updateSubscription: updateReset,
      };

    default:
      return state;
  }
};

export default subscriptionsReducer;
