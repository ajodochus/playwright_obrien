

pipeline {
    agent any 
    stages {
         stage('get git tag') {
            steps {
                script {
                    latestTag = sh(returnStdout:  true, script: "git tag --sort=-creatordate | head -n 1").trim()
                    env.BUILD_VERSION = latestTag
                    echo "env-BUILD_VERSION"
                    echo "${env.BUILD_VERSION}"
                }
            }
        }
        stage('release') {
            steps {
                script{
                    gitTag=sh(returnStdout: true, script: "git tag --contains | head -1").trim()
                    if(gitTag) {
                        echo 'tagggg: ' + gitTag
                        def parts = gitTag.split('_')
                        if( parts.size()==2 && parts[0]==PROJECT_NAME ) {
                            gitTagVersion=parts[1]
                        }
                    }
                }
            }
        }
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
