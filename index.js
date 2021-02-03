// const core = require('@actions/core');
// const github = require('@actions/github');

function log(str){
    console.log(str)
}

function setWorkingDir(){

    log("Setting working directory")

    var currentWorkSpace = process.env.GITHUB_WORKSPACE
    log("Current working directory: " + currentWorkSpace)

    // original : {{working dir}}/{{repoName}}/{{repoName}}
    // new      : {{working dir}}/{{short-repo-name}}

    var repoName = currentWorkSpace.split('\\').pop().split('/').pop()
    log("repo name: " + repoName)

    var shortenedRepoName = repoName.split('.').pop()
    log("shortened repo name: " + shortenedRepoName)

    var workDir = currentWorkSpace.substring(0, currentWorkSpace.indexOf(repoName))
    log("actual working dir: " + workDir)

    var newWorkSpace = workDir + shortenedRepoName

    log("New working dir: " + newWorkSpace)
    
    process.env.LOCAL_WORKSPACE = newWorkSpace
    log("Workspace setting complete")
}

// do the things
log("Emulating TFS environment");
setWorkingDir();
