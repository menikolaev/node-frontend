/**
* Created by mihailnikolaev on 26.12.15.
*/
import alt from '../alt';
import SubmittedRequestsActions from '../actions/SubmittedRequestsActions';

class SubmittedRequestsStore {
  constructor() {
    this.bindActions(SubmittedRequestsActions);
    this.submittedRequests = [
      {
        title: 'ПГАС по общественной деятельности',
        description: 'Lorem Ipsum',
        status: 'На проверке',
        deadline: '21.08.2015',
        formId: 0,
      },
      {
        title: 'ПГАС по научной деятельности',
        description: 'Lorem Ipsum',
        status: 'Проверено',
        deadline: '21.06.2015',
        formId: 1,
      },
      {
        title: 'ПГАС по учебной деятельности',
        description: 'Lorem Ipsum',
        status: 'На проверке',
        deadline: '29.03.2015',
        formId: 2,
      },
    ];
  }

  onGetRequestTypesSuccess(data) {
    this.submittedRequests = data;
  }

  onGetRequestTypesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(SubmittedRequestsStore);
