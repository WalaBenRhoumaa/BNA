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
            // Archive artifacts
            archiveArtifacts artifacts: '**/build/**/*.*', allowEmptyArchive: true
            // Publish test results
            junit 'reports/**/*.xml'
        }

        success {
            echo 'Build succeeded!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}
