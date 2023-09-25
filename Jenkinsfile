

pipeline {
    agent any 
    stages {
        stage('test') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'master') {
                        echo 'I only execute on the master branch'
                        echo 'tag: ' + env.TAG_NAME
                    } else {
                        echo 'I execute elsewhere' + env.BRANCH_NAME
                    }
                }
            }
        }
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
