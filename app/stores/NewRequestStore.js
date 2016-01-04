/**
 * Created by mihailnikolaev on 28.12.15.
 */
import alt from '../alt';
import NewRequestActions from '../actions/NewRequestActions';

class NewRequestStore {
    constructor() {
        this.bindActions(NewRequestActions);
        this.form_id = 0;
    }

    onGetRequestFormSuccess(data) {

    }

    onGetRequestFormFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(NewRequestStore);