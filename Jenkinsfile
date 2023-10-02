

pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
            fileOperations([fileCopyOperation(
                excludes: '',
                flattenFiles: false,
                includes: '/home/ajodochus/jenkins/a/a.txt',
                targetLocation: "/home/ajodochus/jenkins/b"
                )])
            }
        }
        stage('more'){
            steps{
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
