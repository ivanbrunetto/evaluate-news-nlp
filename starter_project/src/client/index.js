// js files
import { handleSubmit } from './js/formHandler';
import { isValidUrl } from './js/inputChecker';
import { fetchEvaluate } from './js/fetchEvaluate';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

document.getElementById('urlForm')
.addEventListener('submit', handleSubmit);

export { 
    handleSubmit, 
    isValidUrl, 
    fetchEvaluate
};