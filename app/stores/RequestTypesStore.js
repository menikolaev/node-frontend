/**
 * Created by mihailnikolaev on 25.12.15.
 */
import alt from '../alt';
import RequestTypesActions from '../actions/RequestTypesActions';

class RequestTypesStore {
    constructor() {
        this.bindActions(RequestTypesActions);
        this.requestTypes = [
            {
                title: 'ПГАС по общественной деятельности',
                description: 'Lorem Ipsum',
                form_id: 0
            },
            {
                title: 'ПГАС по научной деятельности',
                description: 'Lorem Ipsum',
                form_id: 1
            },
            {
                title: 'ПГАС по учебной деятельности',
                description: 'Lorem Ipsum',
                form_id: 2
            }
        ];
    }

    onGetRequestTypesSuccess(data) {
        this.requestTypes = data;
    }

    onGetRequestTypesFail(errorMessage) {
        toastr.error(errorMessage);
    }
}

export default alt.createStore(RequestTypesStore);