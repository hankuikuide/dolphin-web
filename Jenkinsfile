pipeline {
    agent any
    environment {
        //发布组：k8s的namespace、gitlab的群组、harbor项目
        group = "crhms-dev"
    }
    options {
        timeout(time:1, unit: 'HOURS')
    }
    stages {
        stage('Package') {
            steps {
                sh 'npm run build'
            }
        }
    }
}