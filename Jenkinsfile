pipeline{
    agent any

    tools{
        nodejs 'NodeJS'
    }

    stages{
        stage('Build'){
            steps{
                echo 'Building'
                git branch: 'master', url: 'https://github.com/ekykdrm/crud_app.git'
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test'){
            steps{
                bat 'npm test'
                junit 'test-results/results.xml'
            }
        }
        
        stage('Code Quality Analysis'){
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat 'sonar-scanner'
                }
            }
        }

        stage('Security') {
            steps {
                echo 'Running npm audit for security vulnerabilities...'
                bat 'npm audit --json > audit-report.json || exit 0'
                archiveArtifacts artifacts: 'audit-report.json', onlyIfSuccessful: false
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app using Docker...'
                bat '''
                docker build -t crud-app .
                docker stop crud-app-container || exit 0
                docker rm crud-app-container || exit 0
                docker run -d -p 4000:80 --name crud-app-test crud-app
                '''
            }
        }
    }
}