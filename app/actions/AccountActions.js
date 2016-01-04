/**
 * Created by mihailnikolaev on 30.12.15.
 */
import alt from '../alt';

class AccountActions {
    constructor() {
        this.generateActions(
            'getUserInfoSuccess',
            'getUserInfoFail',
            'updateInfoSuccess',
            'updateInfoFail',
            'updateSurname',
            'updateName',
            'updatePatronomic',
            'updateEmail',
            'updateCitizenship'
        );
    }

    getUserInfo(userId) {
        $.ajax({ url: '/api/user' + userId })
            .done(data => {
                this.getUserInfoSuccess(data);
            })
            .fail(jqXhr => {
                this.getUserInfoFail(jqXhr.responseJSON.message);
            });
    }

    updateUserInfo(userId, data) {
        $.ajax({
                type: 'POST',
                url: '/api/user/' + userId,
                data: data
            })
            .done(() => {
                this.updateInfoSuccess();
            })
            .fail((jqXhr) => {
                this.updateInfoFail(jqXhr);
            });
    }
}

export default alt.createActions(AccountActions);