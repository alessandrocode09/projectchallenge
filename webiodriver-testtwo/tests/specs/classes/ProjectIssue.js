var Page = require('./Page');

class ProjectIssue extends Page {
    open() {
        super.open('issues');
    }

    get clickProjectPage() {
        return $(() => document.getElementsByClassName('projects'))
    }

    get searchProjecName() {
        return $('=ale02thinkProject259')
    }

    get clickOverviewLabel() {
        return $('=Overview')
    }

    get clickLinkBug() {
        return $('=Bug')
    }

    get clickNextLink() {
        return $('a=Next »')
    }

    get columnTracker() {
        return $('.tracker')
    }

    get columnStatus() {
        return $('.status')
    }

    get columnPriority() {
        return $('.priority')
    }


}

module.exports = new ProjectIssue();