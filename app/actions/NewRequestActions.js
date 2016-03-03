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

  getRequestForm(formId) {
    $.ajax({ url: '/api/forms/' + formId })
    .done((data) => {
      this.getRequestFormSuccess(data);
    })
    .fail((jqXhr) => {
      this.getRequestFormFail(jqXhr.responseJSON.message);
    });
  }
}

export default alt.createActions(NewRequestActions);
