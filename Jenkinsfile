pipeline {
    agent any

    stages {
        stage('Checkout Git repository') {
            steps {
                echo 'Pulling'
                git branch: 'NADIA', url: 'https://github.com/ipactconsult/BNA_SmartFuture_Workshop_React_Web.git'
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
        stage('Test - Node.js') {
            steps {
                dir('BNA-dashboard/backend') {
                    // Exécution des tests unitaires pour le sous-projet Node.js
                    sh 'npm test'
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
    }

    post {
        always {
            // Archivage des résultats des tests pour Node.js
            dir('BNA-dashboard/backend') {
                junit 'test-results.xml'
            }
            // Archivage des résultats des tests pour React
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