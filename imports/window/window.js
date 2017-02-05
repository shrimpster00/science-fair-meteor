import {Session} from 'meteor/session';
import {Template} from 'meteor/templating';

import './window.html';

Template.window.onRendered(() => {
    Tracker.autorun(() => {
        $('#window').fitText(Session.get("scale"));
        return Session.get("scale");
    });
});

Template.window.helpers({
    calc() {
        return Session.get('calc');
    }
});