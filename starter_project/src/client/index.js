// js files
import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/inputChecker';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

document.getElementById('urlForm')
.addEventListener('submit', handleSubmit);

