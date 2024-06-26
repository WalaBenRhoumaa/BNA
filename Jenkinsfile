pipeline {
    agent any

    tools {
        nodejs 'NodeJS 20.12.2' // Ensure this matches the name you configured in Global Tool Configuration
    }

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                // Replace with your SCM repository URL and branch name
                git url: 'https://github.com/WalaBenRhoumaa/BNA', branch: 'main'
            }
        }

        // Other stages will be added here
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
