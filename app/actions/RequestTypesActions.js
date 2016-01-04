/**
 * Created by mihailnikolaev on 25.12.15.
 */
import alt from '../alt';

class RequestTypesActions {
    constructor() {
        this.generateActions(
            'getRequestTypesSuccess',
            'getRequestTypesFail'
        );
    }

    getRequestTypes() {
        $.ajax({ url: '/api/characters' })
            .done(data => {
                this.getRequestTypesSuccess(data);
            })
            .fail(jqXhr => {
                this.getRequestTypesFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(RequestTypesActions);