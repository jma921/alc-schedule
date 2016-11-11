import React, {Component} from 'react';
import base from '../helpers/base';
import './Profile.css';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: ''
        }
    }
    componentDidMount() {
        base.bindToState(`users`, {
            context: this,
            state: users,
            asArray: true
        })
    }
    render() {
        return (
            <div>
                <h3>Profile</h3>
                <p className="lead">Here's some text</p>
            </div>
        );
    }
}

export default Profile;