/**
 * Created by mihailnikolaev on 28.12.15.
 */
import alt from '../alt';

class NewRequestActions {
    constructor() {
        this.generateActions(
            'getRequestFormSuccess',
            'getRequestFormFail'
        );
    }

    getRequestForm(form_id) {
        $.ajax({ url: '/api/forms/' + form_id })
            .done((data) => {
                this.getRequestFormSuccess(data);
            })
            .fail((jqXhr) => {
                this.getRequestFormFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(NewRequestActions);