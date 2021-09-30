import {
  add_Subscription,
  findSubscription,
  storeSubscription,
  storeSubscription_id,
  update_Subscription,
  resetAddSubscription,
  resetSubscriptionData,
  reset_update_subscription,
  store_delete_id,
} from '../actions/subscriptions_actions';
import { store } from '../stores/store';
const { get, post, del, put } = require('../utils/api');

class subscriptionService {
  state = () => store.getState();
  async addSubscription() {
    const appSubscriptions = this.state().subscriptions.addSubscription;
    console.log('addsubscriptoin Type:', appSubscriptions);
    try {
      const subscription = await post(
        '/api/subscriptions/',
        JSON.stringify({
          type: appSubscriptions.type,
          detail: appSubscriptions.detail,
          months: appSubscriptions.months,
          price: appSubscriptions.price,
        })
      );
      if (subscription.error) {
        throw subscription.error;
      }
      alert(
        `The subscription "${subscription.subscription.type}" has been created !!`
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(add_Subscription('', 'type'));
    store.dispatch(add_Subscription('', 'detail'));
    store.dispatch(add_Subscription('', 'months'));
    store.dispatch(add_Subscription('', 'price'));
    store.dispatch(resetAddSubscription({}));
  }
  async findSubscription() {
    const appStore = this.state().subscriptions;
    try {
      const subscription = await get(
        `/api/subscriptions/${appStore.subscriptionType}`
      );
      if (subscription.error) {
        throw subscription.error;
      }
      store.dispatch(storeSubscription(subscription.subscription));
      store.dispatch(findSubscription(''));
      return subscription;
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(findSubscription(''));
    store.dispatch(resetSubscriptionData({}));
  }
  async updateSubscription() {
    const appStore = this.state().subscriptions;
    try {
      const subscription = await put(
        `/api/subscriptions/${appStore.subscriptionId}`,
        JSON.stringify(appStore.updateSubscription)
      );
      if (subscription.error) {
        throw subscription.error;
      }
      console.log('upadate Subscription:', subscription);
      alert('Subscription successfuly updated');
    } catch (error) {
      console.log(error);
      alert(error);
    }
    store.dispatch(update_Subscription('', 'type'));
    store.dispatch(update_Subscription('', 'detail'));
    store.dispatch(update_Subscription('', 'months'));
    store.dispatch(update_Subscription('', 'price'));
    store.dispatch(storeSubscription_id(''));
    store.dispatch(reset_update_subscription({}));
  }
  async deleteSubscription() {
    const appStore = this.state().subscriptions;
    try {
      const subscription = await del(`/api/subscriptions/${appStore.deleteId}`);
      if (subscription.error) {
        throw subscription.error;
      }
      alert('Subscription was successfuly deleted');
    } catch (error) {
      console.log(error);
      alert(error);
    }

    store.dispatch(store_delete_id(''));
  }
}

export default new subscriptionService();
