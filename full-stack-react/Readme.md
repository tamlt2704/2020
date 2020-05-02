01. voting app

// init project
create-react-app 01_voting_app

// start project
export HOST=0.0.0.0
export PORT=5000
npm start

// bootstrap
npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//bootstrap icon
npm i --save @fortawesome/fontawesome-svg-core
@fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm i --save @fortawesome/free-brands-svg-icons

App.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCheckSquare, faCoffee)

XYZ.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<FontAwesomeIcon icon='coffee' />
