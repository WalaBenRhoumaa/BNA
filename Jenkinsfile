pipeline {
    agent any
    
    stages {
        stage('Checkout Git repository') {
            steps {
                echo 'Pulling'
                git branch: 'main', url: 'https://github.com/WalaBenRhoumaa/BNA'
            }
        }
        
        stage('Install dependencies - Node.js') {
            steps {
                dir('BNA-dashboard/backend') {
                    sh 'npm install'
                }
            }
        }        
        stage('Build - Node.js') {
            steps {
                dir('BNA-dashboard/backend') {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Install dependencies - React') {
            steps {
                dir('BNA-dashboard/admin') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Build - React') {
            steps {
                dir('BNA-dashboard/admin') {
                    sh 'npm run build'
                }
            }
        }
    }
    
    post {
        always {
            // Archive Node.js test results
            dir('BNA-dashboard/backend') {
                junit 'test-results.xml'
            }
            // Archive React test results
            dir('BNA-dashboard/admin') {
                junit 'coverage/junit/results.xml'
            }
        }
        success {
            echo 'Build and tests completed successfully!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
