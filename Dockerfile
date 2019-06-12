FROM parseplatform/parse-server:2.8.4

USER root

RUN apt-get update && \
    apt-get upgrade && \
    npm i -g nyc && \
    mkdir -p '/parse-server/.nyc_output/processinfo' && \
    mkdir -p '/parse-server/coverage' && \
    mkdir -p '/parse-server/.nyc_cache' && \
    chown -R node /parse-server/.nyc_cache && \
    chown -R node /parse-server/.nyc_output && \
    chown -R node /parse-server/coverage

USER node

ENTRYPOINT ["nyc", "--no-clean=true", "--cache-dir='/parse-server/.nyc_cache'", "--include=cloud", "--reporter=lcov", "--reporter=text-summary", "npm", "start"]
