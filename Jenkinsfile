pipeline {
    agent {
        docker {
            image 'node:16-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }       
        }
        
        stage('Start') { 
            steps {
                sh 'npm start & sleep 3m' 
            }       
        }
    }   
}