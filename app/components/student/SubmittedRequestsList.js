/**
* Created by mihailnikolaev on 26.12.15.
*/
import React from 'react';
import SubmittedRequestsActions from '../../actions/SubmittedRequestsActions';
import SubmittedRequestsStore from '../../stores/SubmittedRequestsStore';
import {Card, CardHeader, CardText, CardActions, FlatButton, Avatar} from 'material-ui';

class SubmittedRequestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = SubmittedRequestsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SubmittedRequestsStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SubmittedRequestsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var submittedRequests = this.state.submittedRequests.map((request) => {
      return (
        <div key={request.id}>
        <Card initiallyExpanded={true}>
        <CardHeader
        title={request.title}
        avatar={<Avatar style={{ color:'red' }}>A</Avatar>}
        actAsExpander={true}
        showExpandableButton={true}>
        </CardHeader>
        <CardText expandable={true}>
        <p>Срок закрытия: {request.deadline}</p>
        <p>Статус проверки: {request.status}</p>
        </CardText>
        <CardText expandable={true}>
        {request.description}
        </CardText>
        <CardActions expandable={true}>
        <FlatButton label="Action1"/>
        </CardActions>
        </Card>
        </div>
      );
    });
    return (
      <div>
      {submittedRequests}
      </div>
    );
  }
}

export default SubmittedRequestsList;
