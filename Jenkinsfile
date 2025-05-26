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
        
        stage('Security Analysis'){
            steps {
                withSonarQubeEnv('SonarQube Cloud') {
                    bat 'sonar-scanner'
                }
            }
        }
    }
}