/**
* Created by mihailnikolaev on 17.12.15.
*/
import alt from '../alt';
import FooterActions from '../actions/FooterActions';
import * as toastr from 'util';

class FooterStore {
  constructor() {
    this.bindActions(FooterActions);
    this.characters = [];
    console.log('FooterStore constructor executed');
  }

  onGetTopCharactersSuccess(data) {
    this.characters = data.slice(0, 5);
    console.log('FooterStore onGetCharacterSuccess executed');
  }

  onGetTopCharactersFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON &&
      jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    console.log('FooterStore onGetCharactersFail executed');
  }
}

export default alt.createStore(FooterStore);
