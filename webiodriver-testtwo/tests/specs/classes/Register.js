var Page = require('./Page');

class Register extends Page {
    open() {
        super.open('register');
    }

    get register() {
        return $('.register');
    }

    get username() {
        return $('#user_login');
    }

    get password() {
        return $('#user_password');
    }

    get confirmPassword() {
        return $('#user_password_confirmation')
    }

    get setFirstName() {
        return $('#user_firstname')
    }

    get setLastName() {
        return $('#user_lastname')
    }

    get setEmail() {
        return $('#user_mail')
    }

    get clickCommit() {
        return $(() => document.getElementsByName('commit'))
    }

    get validToast() {
        return $('#flash_notice')
    }
}

module.exports = new Register();