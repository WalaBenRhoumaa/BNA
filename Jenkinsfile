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
                    // Installation des dépendances pour le sous-projet Node.js
                    sh 'npm install'
                }
            }
        }
        stage('Build - Node.js') {
            steps {
                dir('BNA-dashboard/backend') {
                    // Construire le backend Node.js
                    sh 'npm run build'
                }
            }
        }
        stage('Install dependencies - React') {
            steps {
                dir('BNA-dashboard/admin') {
                    // Installation des dépendances pour le projet React
                    sh 'npm install'
                }
            }
        }
        stage('Build - React') {
            steps {
                dir('BNA-dashboard/admin') {
                    // Construire le projet React
                    sh 'npm run build'
                }
            }
        }
        stage('SonarQube Analysis') {
            steps{
              script {
                 def scannerHome = tool 'scanner'
                 withSonarQubeEnv {
                 sh "${scannerHome}/bin/sonar-scanner"
                      }
                     }
                }
       }
    
    }

    post {
        success {
            echo 'Build and tests completed successfully!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}