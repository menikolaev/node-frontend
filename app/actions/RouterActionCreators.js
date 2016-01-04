/**
 * Created by mihailnikolaev on 20.12.15.
 */
import { dispatch } from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import alt from '../alt';


class RouterActionCreators {
    constructor() {
        this.generateActions(
            'storeRouterTransitionPath'
        );
        console.log('RouterActionCreators constructor executed');
    }

    storeRouterTransitionPath(path) {
        dispatch(ActionTypes.ROUTER_NEXT_TRANSITION_PATH, {path});
        console.log('RouterActionCreators storeRouterTransitionPath executed');
    }
}

export default alt.createActions(RouterActionCreators);