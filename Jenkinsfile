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
            environment {
                SNYK_TOKEN = credentials('SNYK_TOKEN')
            }
            steps {
                bat 'npm install -g snyk'
                bat 'snyk auth %SNYK_TOKEN%'
                bat 'snyk test --json > snyk-report.json || exit 0'
                bat 'type snyk-report.json'
            }
        }
    }
}