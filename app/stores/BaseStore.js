/**
 * Created by mihailnikolaev on 20.12.15.
 */
import {EventEmitter} from 'events';
import { register } from '../dispatchers/AppDispatcher';

export default class BaseStore extends EventEmitter {

    constructor() {
        super();
        console.log('BaseStore constructor executed');
    }

    subscribe(actionSubscribe) {
        this._dispatchToken = register(actionSubscribe());
        console.log('BaseStore subscribe executed');
    }

    get dispatchToken() {
        console.log('BaseStore dispatchToken executed');
        return this._dispatchToken;
    }

    emitChange() {
        this.emit('CHANGE');
        console.log('BaseStore emitChange executed');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb);
        console.log('BaseStore addChangeListener executed');
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
        console.log('BaseStore removeChangeListener executed');
    }
}