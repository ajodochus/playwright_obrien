

pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                sh '''
                    echo "branch name"
                    echo $BRANCH_NAME
                '''
            }
        }
    }
}
