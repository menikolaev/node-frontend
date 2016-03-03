/**
* Created by mihailnikolaev on 24.12.15.
*/
import React from 'react';
import RequestTypesActions from '../../actions/RequestTypesActions';
import RequestTypesStore from '../../stores/RequestTypesStore';
import {Link} from 'react-router';
import {Card, CardHeader, CardText, CardActions, FlatButton, Avatar} from 'material-ui';

class RequestTypesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = RequestTypesStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    RequestTypesStore.listen(this.onChange);
  }

  componentWillUnmount() {
    RequestTypesStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var requestTypes = this.state.requestTypes.map((type) => {
      return (
        <div key={type.id}>
        <Card initiallyExpanded={true}>
        <CardHeader
        title={type.title}
        avatar={<Avatar style={{ color:'red' }}>A</Avatar>}
        actAsExpander={true}
        showExpandableButton={true}>
        </CardHeader>
        <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions expandable={true}>
        <FlatButton label="Action1"/>
        <Link to={'/new-request/' + type.formId}>
        <FlatButton label="Подать заявку"/>
        </Link>
        </CardActions>
        </Card>
        </div>
      );
    });
    return (
      <div>
      {requestTypes}
      </div>
    );
  }
}

export default RequestTypesList;
