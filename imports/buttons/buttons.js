import {Template} from 'meteor/templating';

import './buttons.html';

Template.buttons.events({
    'click .button' (event) {
        var button = event.target.dataset.button;
        switch (button) {
            case "ENT":
                var ans = eval(Session.get("calc2")) || "";
                Session.set("calc", ans);
                Session.set("calc2", "");
                Session.set("done", true);
                break;
            case "DEL":
                if (Session.get("done")) {
                    Session.set("calc", "");
                    Session.set("calc2", "");
                    Session.set("scale",.5);
                } else {
                    var calc = Session.get("calc");
                    var calc2 = Session.get("calc2");
                    var chrc = calc2[calc2.length - 1];
                    if (chrc == "/" || chrc == "*" || chrc == "+" || chrc == "-") {
                        Session.set("calc",calc.substring(0,calc.length - 3));
                    } else {
                        Session.set("calc",calc.substring(0,calc.length - 1));
                    }
                    Session.set("calc2",calc2.substring(0,calc2.length - 1));
                }
                break;
            default:
                if (Session.get("done")) {
                    Session.set("calc", "");
                    Session.set("calc2", "");
                    Session.set("done", false);
                    Session.set("scale",.5);
                }
                Session.set("scale", Session.get("scale") + .04);
                var button2 = "";
                switch (button) {
                    case "/":
                        button2 = " ÷ ";
                        break;
                    case "*":
                        button2 = " × ";
                        break;
                    case "+":
                        button2 = " + ";
                        break;
                    case "-":
                        button2 = " – ";
                        break;
                    default:
                        button2 = button;
                        break;
                }
                Session.set("calc", Session.get("calc") + button2);
                Session.set("calc2", Session.get("calc2") + button);
                break;
        }
        return button;
    }
});