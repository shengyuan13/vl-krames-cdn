// Password Input
const password = document.querySelector('.pass-validate');
const toggle = document.querySelector('.vl-krames-ee7853d2-e697-46a4-b57d-0e2e0aef00dc');

if (password != null && toggle != null) {
    toggle.addEventListener('click', function (e) {
        const passwordType = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', passwordType);
        toggle.innerText === 'visibility' ? toggle.innerText = 'visibility_off' : toggle.innerText = 'visibility';
    });
}

// New Password Input
const newPassword = document.querySelector('#new-pass-validate');
const newPassToggle = document.querySelector('.vl-krames-9656a03f-26c7-4233-af1c-cb7d2d6547e5');
const checkIcon = document.querySelector('#check-icon');
const newPasswordHelperText = document.querySelector('#new-password-helper-text');

if (newPassToggle != null && newPassword != null) {
    newPassToggle.addEventListener('click', function (e) {
        const newPasswordType = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        newPassword.setAttribute('type', newPasswordType);
        newPassToggle.innerText === 'visibility' ? newPassToggle.innerText = 'visibility_off' : newPassToggle.innerText = 'visibility';
    });
}

// New Password Validation 
// Edit with necessary validation
if (newPassword != null && checkIcon != null && newPasswordHelperText != null) {
    newPassword.addEventListener('change', function (e) {
        if (newPassword.value.length >= 14) {
            checkIcon.setAttribute('style', 'display:inline-block; color: green');
            newPasswordHelperText.setAttribute('style', 'width: 380px; position: absolute; margin-left: 26px; margin-top:3px');
        } else {
            checkIcon.setAttribute('style', 'display:none');
            newPasswordHelperText.setAttribute('style', ' margin-left: 0px;');
        }
    });
}

// Verify Password
const verifyNewPassword = document.querySelector('#verify-new-pass-validate');
const verifyPassToggle = document.querySelector('.vl-krames-125bd89a-73a2-4282-931a-572e16b94914');
const verifySuccessText = document.querySelector('#verify-success-text');
const verifyCheckIcon = document.querySelector('#verify-check-icon');
const verifyWarningText = document.querySelector('#verify-warning-text');
const warningIcon = document.querySelector('#warning-icon');

if (verifyNewPassword != null && verifyPassToggle != null && verifySuccessText != null && verifyCheckIcon != null && verifyWarningText != null && warningIcon != null) {
    verifyPassToggle.addEventListener('click', function (e) {
        const newPasswordType = verifyNewPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        verifyNewPassword.setAttribute('type', newPasswordType);
        verifyPassToggle.innerText === 'visibility' ? verifyPassToggle.innerText = 'visibility_off' : verifyPassToggle.innerText = 'visibility';
    });

    verifyNewPassword.addEventListener('change', function (e) {
        if (verifyNewPassword.value == "") {
            verifyWarningText.setAttribute('style', 'display:none');
            warningIcon.setAttribute('style', 'display:none');
            verifySuccessText.setAttribute('style', 'display:none');
            verifyCheckIcon.setAttribute('style', 'display:none');
        }
        else if (newPassword.value == verifyNewPassword.value) {
            verifyWarningText.setAttribute('style', 'display:none');
            warningIcon.setAttribute('style', 'display:none');
            verifySuccessText.setAttribute('style', 'position: absolute; margin-left: 26px; color: green;');
            verifyCheckIcon.setAttribute('style', 'display:inline-block; color:green');
        } else {
            verifySuccessText.setAttribute('style', 'display:none');
            verifyCheckIcon.setAttribute('style', 'display:none');
            verifyWarningText.setAttribute('style', 'position: absolute; margin-left: 27px; ');
            warningIcon.setAttribute('style', 'display: inline-block; color: yellow;');
        }
    });
}
// Display code modals
// Button 1 Modal

function openModal(we) {
    var elems = document.querySelector(`.${we.id}`);
    var instance = M.Modal.init(elems);
    if (instance != null) {
        instance.open();
    }
}

// Dynamically add openModal eventListener
var modalList = document.querySelectorAll("[id*=vl-krames-modal]");
if (modalList != null) {
    modalList.forEach(f => {
        var modalElement = document.querySelector(`#${f.id}`);
        modalElement.addEventListener('click', function () { openModal(modalElement) }, false);
    });
}

import { MDCRipple } from '@material/ripple';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCList } from "@material/list";
import "materialize-css/dist/js/materialize.min";

var mdcTexFieldHelperText = document.querySelector('.mdc-text-field-helper-text');
var mdcRipple = document.querySelector('.vl-krames-6450b46c-18df-4c2d-98cb-9f70502a7d2b');
var mdcList = document.querySelector('.mdc-list');

if (mdcTexFieldHelperText != null && mdcRipple != null && mdcList != null) {
    new MDCTextFieldHelperText(mdcTexFieldHelperText);
    new MDCRipple(mdcRipple);
    new MDCList(mdcList);
}

// Material tooltip 
function openTooltip(varTooltip) {
    M.Tooltip.init(varTooltip);
}

// Dynamically add tooltip eventListener
var tooltippedList = document.querySelectorAll("[class*=tooltipped]");
if (tooltippedList != null) {
    tooltippedList.forEach(e => {
        var toolTipElement = document.querySelector(`.${e.className.split(' ')[1]}`);
        toolTipElement.addEventListener('mouseover', function () { openTooltip(toolTipElement) }, false);
    }
    );
}