def url = env.BUILD_URL

pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                sh '''
                    echo "scanning every 2 minutes"
                    echo $BUILD_URL
                '''
            }
        }
    }
}
