/**
* Created by mihailnikolaev on 26.12.15.
*/
import alt from '../alt';

class SubmittedRequestsActions {
  constructor() {
    this.generateActions(
      'getSubmittedRequestsSuccess',
      'getSubmittedRequestsFail'
    );
  }

  getSubmittedRequests() {
    $.ajax({ url: '/api/characters' })
    .done(data => {
      this.getSubmittedRequestsSuccess(data);
    })
    .fail(jqXhr => {
      this.getSubmittedRequestsFail(jqXhr.responseJSON.message);
    });
  }
}

export default alt.createActions(SubmittedRequestsActions);
