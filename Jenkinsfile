

pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                fileOperations([folderCopyOperation(
                excludes: '',
                flattenFiles: false,
                includes: '/home/ajodochus/jenkins/a/a.txt',
                targetLocation: "/home/ajodochus/jenkins/b"
            )])
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
