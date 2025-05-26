pipeline{
    agent any

    tools{
        nodejs 'NodeJS'
    }

    stages{
        stage('Build'){
            steps{
                echo 'Building'
                git master: 'main', url: 'https://github.com/ekykdrm/crud_app.git'
                bat 'npm install'
                bat 'npm run build'
            }
        }
    }
}