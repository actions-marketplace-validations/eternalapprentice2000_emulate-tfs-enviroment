// const core = require('@actions/core');
// const github = require('@actions/github');

function log(str){
    console.log(str)
}

function setWorkingDir(){

    log("Setting working directory")

    let currentWorkSpace = process.env.GITHUB_WORKSPACE.
    log("Current working directory: " + currentWorkSpace)

    // original : {{working dir}}/{{repoName}}/{{repoName}}
    // new      : {{working dir}}/{{short-repo-name}}

    let repoName = currentWorkSpace.split('\\').pop().split('/').pop()
    log("repo name: " + repoName)

    let shortenedRepoName = repoName.split('.').pop()
    log("shortened repo name: " + shortenedRepoName)

    let workDir = currentWorkSpace.substring(0, currentWorkSpace.indexOf(repoName))
    log("actual working dir: " + workDir)

    let newWorkSpace = workDir + shortenedRepoName

    log("New working dir: " + newWorkSpace)
    
    process.env.GITHUB_WORKSPACE = newWorkSpace
    log("Workspace setting complete")

}

// do the things
log("Emulating TFS environment");
setWorkingDir();
