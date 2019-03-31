const expect = require('chai').expect;

const Register = require('./classes/Register');
const ProjectsPage = require('./classes/ProjectsPage');
const ProjectIssue = require('./classes/ProjectIssue');


const newIssues = [
    {
        value: 'Teste01'
    },
    {
        value: 'Teste02'
    },
    {
        value: 'Teste03'
    },
    {
        value: 'Teste04'
    },
    {
        value: 'Teste05'
    },
    {
        value: 'Teste06'
    },
    {
        value: 'Teste07'
    },
    {
        value: 'Teste08'
    },
    {
        value: 'Teste09'
    },
    {
        value: 'Teste10'
    },
    {
        value: 'Teste11'
    },
    {
        value: 'Teste12'
    },
    {
        value: 'Teste13'
    },
    {
        value: 'Teste14'
    },
    {
        value: 'Teste15'
    },
    {
        value: 'Teste16'
    },
    {
        value: 'Teste17'
    },
    {
        value: 'Teste18'
    },
    {
        value: 'Teste19'
    },
    {
        value: 'Teste20'
    },
    {
        value: 'Teste21'
    },
    {
        value: 'Teste22'
    },
    {
        value: 'Teste23'
    },
    {
        value: 'Teste24'
    },
    {
        value: 'Teste25'
    },
    {
        value: 'Teste26'
    },
    {
        value: 'Teste27'
    },
    {
        value: 'Teste28'
    },
    {
        value: 'Teste29'
    },
    {
        value: 'Teste30'
    }
]


describe('Readmine Test', () => {
    it('Register', () => {
        Register.open();

        Register.register.click()

        Register.username.setValue('ale00592think')

        Register.password.setValue('123456')

        Register.confirmPassword.setValue('123456')

        Register.setFirstName.setValue('ale00592think')

        Register.setLastName.setValue('ale00592think')

        Register.setEmail.setValue('ale00592think@gmail.com')

        Register.clickCommit.click()

        expect(Register.validToast.getText()).to.equal('Your account has been activated. You can now log in.')

    });

    it('Create a project', () => {

        ProjectsPage.projectPage.click()

        ProjectsPage.createNewProject.click()

        //Need to be the same arg to find the element with the same text name, need to be make manually on "./ProjectIssue"
        ProjectsPage.projectName.setValue('ale02thinkProject259')

        ProjectsPage.clickPublic.click()

        ProjectsPage.clickNameTrack.click()

        ProjectsPage.clickNameNews.click()

        ProjectsPage.clickNameDocs.click()

        ProjectsPage.clickNameFiles.click()

        ProjectsPage.clickNameWiki.click()

        ProjectsPage.clickNameBoards.click()

        ProjectsPage.clickNameCalendar.click()

        ProjectsPage.clickNameGant.click()

        ProjectsPage.clickFeature.click()

        ProjectsPage.clickSupport.click()

        ProjectsPage.clickCommit.click()

        expect(ProjectsPage.validToastProject.getText()).to.equal('Successful creation.');

    });

    it('Search a project and create a new issue', () => {

        ProjectIssue.clickProjectPage.click()

        ProjectIssue.searchProjecName.click()

        newIssues.forEach(function (newIssue) {
            let actual = newIssue.value;

            const clickNewIssue = $('=New issue')
            clickNewIssue.click()

            const setSujectName = $('#issue_subject')
            setSujectName.addValue(actual)

            const clickCreate = $(() => document.getElementsByName('commit'))
            clickCreate.click()
        })

        ProjectIssue.clickOverviewLabel.click()

        ProjectIssue.clickLinkBug.click()

        ProjectIssue.clickNextLink.click()

        expect(ProjectIssue.columnTracker.getText()).to.equal('Bug')

        expect(ProjectIssue.columnStatus.getText()).to.equal('New')

        expect(ProjectIssue.columnPriority.getText()).to.equal('Normal')

    });

});