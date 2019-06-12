pipeline {
  agent any
  environment {
    DOCKER_USERNAME = "pandaclouds"
    DOCKER_REPO = "parse-coverage"
  }

  tools {
    nodejs 'Node 8.13.0'
  }

  stages {
    stage('Test') {
      steps {
      	// the test builds all images and tests them
        sh 'npm test'
      }
    }

    stage('If Master') {
      when { branch 'master' }
      stages {
        stage('Push') {
        
          environment {
            DOCKER_CREDENTIALS = credentials('dockerhub-pandaclouds')
          }
          steps {
            sh 'docker login -u ' + "${env.DOCKER_CREDENTIALS_USR}" + ' -p ' + "${env.DOCKER_CREDENTIALS_PSW}"
            // Push ALL Tags
            sh 'docker push ' + "${env.DOCKER_USERNAME_REPO}"
          }
        }
      }
    }
  }

  post{
    always {
      cleanUp()
    }
  }
}

void cleanUp() {
    deleteDir()
    // remove unused images
    sh 'docker images -a | grep "parse-coverage" | awk \'{print $3}\' | xargs docker rmi ||:'
  
    // remove unused docker volumes
    // they tend to accumulate because we deploy mongo containers 
    // which leaves behind a 300M container
    // and it creates a volume for us trying to be helpful.
    sh 'docker volume prune -f'
}