pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                sh '''
                    echo "Multiline shell steps works too"
                    echo "branch name: " + env.GIT_COMMIt
                '''
            }
        }
    }
}