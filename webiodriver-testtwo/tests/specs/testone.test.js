// const assert = require('assert');
const expect = require('chai').expect;
const Register = require('./classes/Register');

describe('Redmine org', function() {
    beforeEach(() => {
        browser.url('http://demo.redmine.org/');
        
    })

    it('Register form', () => {
        const registerNewUser = $('.register')
        registerNewUser.click();

        const setUserName = $('#user_login')
        setUserName.addValue('ale0048think')

        const setPassword = $('#user_password')
        setPassword.addValue('12345678')

        const setConfirmPass = $('#user_password_confirmation')
        setConfirmPass.addValue('12345678')

        const setFirstName = $('#user_firstname')
        setFirstName.addValue('ale0048think')

        const setLastName = $('#user_lastname')
        setLastName.addValue('ale0048think')

        const setEmail = $('#user_mail')
        setEmail.addValue('ale0048think@gmailll.com')

        const clickCommit = $(() => document.getElementsByName('commit'))
        clickCommit.click()

        // get by id="flash_notice" the text --> Your account has been activated. You can now log in.
        const validToast = $('#flash_notice').getText()
        expect(validToast).to.equal('Your account has been activated. You can now log in.');

        
    });

    it('Create a Project', () => {
        const clickProjectLabel = $(() => document.getElementsByClassName('projects'))
        clickProjectLabel.click()

        const clickNewProject = $('//*[@id="content"]/div[1]/a[1]')
        clickNewProject.click()

        const setProjectName = $('#project_name')
        setProjectName.addValue('ale02thinkProject230')

        const clickPublic = $('#project_is_public')
        clickPublic.click()

        const clickNameTrack = $('#project_enabled_module_names_time_tracking')
        clickNameTrack.click()

        const clickNameNews = $('#project_enabled_module_names_news')
        clickNameNews.click()

        const clickNameDocs = $('#project_enabled_module_names_documents')
        clickNameDocs.click()

        const clickNameFiles = $('#project_enabled_module_names_files')
        clickNameFiles.click()

        const clickNameWiki = $('#project_enabled_module_names_wiki')
        clickNameWiki.click()

        const clickNameBoards = $('#project_enabled_module_names_boards')
        clickNameBoards.click()

        const clickNameCalendar = $('#project_enabled_module_names_calendar')
        clickNameCalendar.click()

        const clickNameGant = $('#project_enabled_module_names_gantt')
        clickNameGant.click()

        const clickFeature = $('//*[@id="project_trackers"]/label[2]/input')
        clickFeature.click()

        const clickSupport = $('//*[@id="project_trackers"]/label[3]/input')
        clickSupport.click()

        const clickCommit = $(() => document.getElementsByName('commit'))
        clickCommit.click()

        const validToastProject = $('#flash_notice').getText()
        expect(validToastProject).to.equal('Successful creation.');

    });

    it('Search a project and create a new issue', () => {
        const clickProjectLabel2 = $(() => document.getElementsByClassName('projects'))
        clickProjectLabel2.click()

        const searchProjecName = $('=ale02thinkProject230')
        searchProjecName.click()

        for (var i = 0; i < 30; i++) {
            const clickNewIssue = $('=New issue')
            clickNewIssue.click()

            const setSujectName = $('#issue_subject')
            setSujectName.addValue('Issue win!!')

            const clickCreate = $(() => document.getElementsByName('commit'))
            clickCreate.click()
        }

        const clickOverviewLabel = $('=Overview')
        clickOverviewLabel.click()

        const clickLinkBug = $('=Bug')
        clickLinkBug.click()

        const clickNextLink = $('a=Next »')
        clickNextLink.click()

        //const textInsideTableBug = $(() => document.getElementsByClassName('tracker'))
        //assert.equal(textInsideTableBug, 'Bug')

        
    });

});