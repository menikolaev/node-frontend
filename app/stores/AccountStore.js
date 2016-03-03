/**
* Created by mihailnikolaev on 30.12.15.
*/
import alt from '../alt';
import AccountActions from '../actions/AccountActions';

class AccountStore {
  constructor() {
    this.bindActions(AccountActions);
    this.surname = '';
    this.name = '';
    this.patronomic = '';
    this.email = '';
    this.citizenship = '';
    this.cityItems = [
      { id: 1, name: 'Москва' },
      { id: 2, name: 'Санкт-Петербург' },
      { id: 3, name: 'Пермь' },
      { id: 4, name: 'Нижний Новгород' },
    ];
    this.studyLevels = [
      { id: 1, name: 'Бакалавриат' },
      { id: 2, name: 'Магистратура' },
    ];
    this.faculties = [
      { id: 1, name: 'ФКН' },
      { id: 2, name: 'ФСН' },
      { id: 3, name: 'ФГН' },
    ];
    this.studyPrograms = [
      { id: 1, name: 'ПИ' },
      { id: 2, name: 'ПМИ' },
    ];
    this.courses = [
      { id: 1, name: 1 },
      { id: 2, name: 2 },
      { id: 3, name: 3 },
      { id: 4, name: 4 },
    ];
    this.formsOfStudy = [
      { id: 1, name: 'Бюджетная' },
      { id: 2, name: 'Коммерческая' },
    ];
    this.selectCity = 1;
    this.selectStudyLevel = 1;
    this.selectFaculty = 1;
    this.selectCourse = 1;
    this.selectStudyProgram = 1;
    this.selectFormOfStudy = 1;
  }

  onGetUserInfoSuccess(data) {

  }

  onGetUserInfoFail(message) {

  }

  onUpdateInfoSuccess() {

  }

  onUpdateInfoFail(jqXhr) {

  }

  onUpdateSurname(event) {
    this.surname = event.target.value;
  }

  onUpdateName(event) {
    this.name = event.target.value;
  }

  onUpdatePatronomic(event) {
    this.patronomic = event.target.value;
  }

  onUpdateEmail(event) {
    this.email = event.target.value;
  }

  onUpdateCitizenship(event) {
    this.citizenship = event.target.value;
  }
}

export default alt.createStore(AccountStore);
