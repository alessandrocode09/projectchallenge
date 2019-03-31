var Page = require('./Page');

class ProjectsPage extends Page {
    open() {
        super.open('projects');
    }

    get projectPage() {
        return $(() => document.getElementsByClassName('projects'))
    }

    get createNewProject() {
        return $('//*[@id="content"]/div[1]/a[1]')
    }

    get projectName() {
        return $('#project_name')
    }

    get clickPublic() {
        return $('#project_is_public')
    }

    get clickNameTrack() {
        return $('#project_enabled_module_names_time_tracking')
    }

    get clickNameNews() {
        return $('#project_enabled_module_names_news')
    }

    get clickNameDocs() {
        return $('#project_enabled_module_names_documents')
    }

    get clickNameFiles() {
        return $('#project_enabled_module_names_files')
    }

    get clickNameWiki() {
        return $('#project_enabled_module_names_wiki')
    }

    get clickNameBoards() {
        return $('#project_enabled_module_names_boards')
    }

    get clickNameCalendar() {
        return $('#project_enabled_module_names_calendar')
    }

    get clickNameGant() {
        return $('#project_enabled_module_names_gantt')
    }

    get clickFeature() {
        return $('//*[@id="project_trackers"]/label[2]/input')
    }

    get clickSupport() {
        return $('//*[@id="project_trackers"]/label[3]/input')
    }

    get clickCommit() {
        return $(() => document.getElementsByName('commit'))
    }

    get validToastProject() {
        return $('#flash_notice')
    }
    
}

module.exports = new ProjectsPage();