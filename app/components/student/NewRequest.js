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
    NewRequestActions.getRequestForm(this.props.params.formId);
  }

  componentWillUnmount() {
    NewRequestStore.unlisten(this.onChange);
    $(document.body).removeClass();
  }

  componentDidUpdate(prevProps) {
    // Fetch new charachter data when URL path changes
    if (prevProps.params.formId !== this.props.params.formId) {
      NewRequestActions.getRequestForm(this.props.params.formId);
    }
  }

  render() {
    return (
      <div>
      {this.props.params.formId}
      </div>
    );
  }
}

export default NewRequest;
