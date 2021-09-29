export const add_Subscription = (input, detail) => {
  return {
    type: 'ADD_SUBSCRIPTION',
    input: input,
    detail: detail,
  };
};

export const resetAddSubscription = (obj) => {
  return {
    type: 'RESET_ADD_SUBSCRIPTION',
    reset: obj,
  };
};
export const findSubscription = (input) => {
  return {
    type: 'FIND_SUBSCRIPTION',
    input: input,
  };
};
export const storeSubscription = (data) => {
  return {
    type: 'STORE_SUBSCRIPTION_DATA',
    data: data,
  };
};

export const resetSubscriptionData = (obj) => {
  return {
    type: 'RESET_SUBSCRIPTION_DATA',
    reset: obj,
  };
};

export const storeSubscription_id = (id) => {
  return {
    type: 'STORE_SUBSCRIPTION_ID',
    id: id,
  };
};

export const update_Subscription = (input, detail) => {
  return {
    type: 'UPDATE_SUBSCRIPTION',
    input: input,
    detail: detail,
  };
};

export const reset_update_subscription = (obj) => {
  return {
    type: 'RESET_UPDATE_SUBSCRIPTION',
    reset: obj,
  };
};
