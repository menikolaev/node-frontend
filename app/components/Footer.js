/**
 * Created by mihailnikolaev on 15.12.15.
 */
import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this);
        console.log('Footer constructor executed');
    }

    componentDidMount() {
        FooterStore.listen(this.onChange);
        FooterActions.getTopCharacters();
        console.log('Footer componentDidMount executed');
    }

    componentWillUnmount() {
        FooterStore.unlisten(this.onChange);
        console.log('Footer componentWillUnmount executed');
    }

    onChange(state) {
        this.setState(state);
        console.log('Footer onChange executed');
    }

    render() {
        console.log('Footer render executed');
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by <strong>Node.js</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
                            <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
                            <p>© 2015 Sahat Yalkabov.</p>
                        </div>
                        <div className='col-sm-7 hidden-xs'>
                            <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
                            <ul className='list-inline'>
                                цакуаукац
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;