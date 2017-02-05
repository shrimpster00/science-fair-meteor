import {Template} from 'meteor/templating';

import './buttons.html';

Template.buttons.events({
    'click .button'(event) {
        var button = event.target.dataset.button;
        var calc = function() {
            console.log('Fired');
            return false;
        }
        switch (button) {
            case "ENT":
                calc();
                break;
            case "DEL":
                console.log("backSpc");
                break;
            default:
                Session.set("scale",Session.get("scale")+.04);
                Session.set("calc",Session.get("calc")+button);
                break;
        }
        return button;
    }
});