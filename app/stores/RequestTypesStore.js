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
        formId: 0,
      },
      {
        title: 'ПГАС по научной деятельности',
        description: 'Lorem Ipsum',
        formId: 1,
      },
      {
        title: 'ПГАС по учебной деятельности',
        description: 'Lorem Ipsum',
        formId: 2,
      },
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
