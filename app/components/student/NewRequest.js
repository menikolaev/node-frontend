/**
 * Created by mihailnikolaev on 26.12.15.
 */
import React from 'react';
import NewRequestStore from '../../stores/NewRequestStore';
import NewRequestActions from '../../actions/NewRequestActions';

class NewRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = NewRequestStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidMount() {
        NewRequestStore.listen(this.onChange);
        NewRequestActions.getRequestForm(this.props.params.form_id);
    }

    componentWillUnmount() {
        NewRequestStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        // Fetch new charachter data when URL path changes
        if (prevProps.params.form_id !== this.props.params.form_id) {
            NewRequestActions.getRequestForm(this.props.params.form_id);
        }
    }

    render() {
        return (
            <div>
                {this.props.params.form_id}
            </div>
        );
    }
}

export default NewRequest;