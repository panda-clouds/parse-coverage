FROM parseplatform/parse-server:3.4.4

USER root

# This allows parse to find the "mockdate" module
# that we have to install globally
# because local install fails
ENV NODE_PATH="/usr/local/lib/node_modules"


RUN apk update && \
    apk upgrade && \
    npm i -g nyc && \
    npm i -g mockdate && \
    chmod -R a+rwx /parse-server

ENTRYPOINT ["nyc", "--no-clean=true", "--cache-dir='/parse-server/.nyc_cache'", "--include=cloud","--exclude=**/specInjection.js",  "--reporter=lcov", "--reporter=text-summary", "--reporter=json-summary", "node", "./bin/parse-server"]