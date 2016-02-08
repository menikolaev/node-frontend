/**
 * Created by mihailnikolaev on 23.12.15.
 */
import alt from '../../alt';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import AccountStore from '../../stores/AccountStore';
import AccountActions from '../../actions/AccountActions';
import {TextField, SelectField, FlatButton} from 'material-ui';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = AccountStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        AccountStore.listen(this.onChange);
        //AccountActions.getRequestForm(this.props.params.form_id);
    }

    componentWillUnmount() {
        AccountStore.unlisten(this.onChange);
    }

    render() {
        return (
            <div>
                <h1>Account</h1>
                <TextField hintText="Фамилия" floatingLabelText="Фамилия" onChange={AccountActions.updateSurname}/><br/>
                <TextField hintText="Имя" floatingLabelText="Имя" onChange={AccountActions.updateName}/><br/>
                <TextField hintText="Отчество" floatingLabelText="Отчество" onChange={AccountActions.updatePatronomic}/><br/>
                <TextField hintText="Email" floatingLabelText="Email" onChange={AccountActions.updateEmail}/><br/>
                <TextField hintText="Гражданство" floatingLabelText="Гражданство" onChange={AccountActions.updateCitizenship}/><br/>
                <SelectField menuItems={this.state.cityItems}
                             valueMember="id"
                             displayMember="name"
                             valueLink={this.linkState('selectCity')}
                /><br/>
                <SelectField menuItems={this.state.studyLevels}
                             valueMember="id"
                             displayMember="name"
                             valueLink={this.linkState('selectStudyLevel')}
                /><br/>
                <SelectField menuItems={this.state.faculties}
                             valueMember="id"
                             displayMember="name"
                             valueLink={this.linkState('selectFaculty')}
                /><br/>
                <SelectField menuItems={this.state.studyPrograms}
                             valueMember="id"
                             displayMember="name"
                             valueLink={this.linkState('selectStudyProgram')}
                /><br/>
                <SelectField menuItems={this.state.courses}
                             valueMember="id"
                             displayMember="name"
                             valueLink={this.linkState('selectCourse')}
                /><br/>
                <SelectField menuItems={this.state.formsOfStudy}
                             valueMember="id"
                             displayMember="name"
                             valueLink={this.linkState('selectFormOfStudy')}
                /><br/>
                <FlatButton label="Редактировать" />
                <FlatButton label="Изменить пароль" />
            </div>
        );
    }
}

export default Account;

ReactMixin(Account.prototype, React.addons.LinkedStateMixin);
