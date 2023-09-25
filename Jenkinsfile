

pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                sh '''
                    echo "branch"
                    echo $BRANCH_NAME
                    echo "tag"
                    echo $TAG_NAME
                '''
            }
        }
    }
}
