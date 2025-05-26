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
    }
}