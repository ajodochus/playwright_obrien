pipeline {
    environment {
        test = credentials("TEST")
    }
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!' 
                echo 'commit: ' + env.GIT_COMMIT
                echo 'branch name: ' + env.BRANCH_NAME
                echo 'branch: ' + env.GIT_BRANCH
                echo 'tag: ' + env.TAG_NAME
            }
        }
    }
}