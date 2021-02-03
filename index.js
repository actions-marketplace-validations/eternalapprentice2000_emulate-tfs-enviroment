const core = require('@actions/core');
const github = require('@actions/github');

function log(str){
    console.log(str)
}

function setWorkingDir(){

    log("Setting working directory")

    let currentWorkSpace = process.env.GITHUB_WORKSPACE.
    core.debug("Current working directory: " + currentWorkSpace)

    // original : {{working dir}}/{{repoName}}/{{repoName}}
    // new      : {{working dir}}/{{short-repo-name}}

    let repoName = currentWorkSpace.split('\\').pop().split('/').pop()
    core.debug("repo name: " + repoName)

    let shortenedRepoName = repoName.split('.').pop()
    core.debug("shortened repo name: " + shortenedRepoName)

    let workDir = currentWorkSpace.substring(0, currentWorkSpace.indexOf(repoName))
    core.debug("actual working dir: " + workDir)

    let newWorkSpace = workDir + shortenedRepoName

    core.debug("New working dir: " + newWorkSpace)
    
    process.env.GITHUB_WORKSPACE = newWorkSpace
    log("Workspace setting complete")

}

// do the things
try{
    log("Emulating TFS environment");
    setWorkingDir();
} catch (error) {
    core.setFailed(error.message);
}