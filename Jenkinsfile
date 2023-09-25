pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                sh '''
                    echo "scanning every 2 minutes"
                    echo "branch name: " + env.GIT_COMMIT
                    echo gitcommit %GIT_COMMIT%
                '''
            }
        }
    }
}