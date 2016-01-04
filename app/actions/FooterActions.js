/**
 * Created by mihailnikolaev on 15.12.15.
 */
import alt from '../alt';

class FooterActions {
    constructor() {
        this.generateActions(
            'getTopCharactersSuccess',
            'getTopCharactersFail'
        );
    }

    getTopCharacters() {
        $.ajax({ url: '/api/characters/top' })
            .done((data) => {
                this.getTopCharactersSuccess(data)
            })
            .fail((jqXhr) => {
                this.getTopCharactersFail(jqXhr)
            });
    }
}

export default alt.createActions(FooterActions);