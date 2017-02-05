import {Session} from 'meteor/session';

import '../imports/materialize-src/js/bin/materialize.js';

import '../imports/fitText.js/jquery.fittext.js';

import '../imports/buttons/buttons.js';
import '../imports/window/window.js';

Session.setDefault("calc","");
Session.setDefault("scale",.5);
Session.setDefault("done",false);