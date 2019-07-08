FROM parseplatform/parse-server:3.0.0

USER root

# We can't run this on old parse version
# RUN apt-get update
# RUN apt-get upgrade -y
# 
# This happens
# Get:6 http://deb.debian.org jessie/main amd64 Packages [9098 kB]
# Fetched 10.2 MB in 6s (1545 kB/s)
# W: Failed to fetch http://deb.debian.org/debian/dists/jessie-updates/InRelease  Unable to find expected entry 'main/binary-amd64/Packages' in Release file (Wrong sources.list entry or malformed file)
# E: Some index files failed to download. They have been ignored, or old ones used instead.

# This allows parse to find the "mockdate" module
# that we have to install globally
# because local install fails
ENV NODE_PATH="/usr/local/lib/node_modules"

RUN npm i -g nyc && \
    npm i -g mockdate && \
    chmod -R a+rwx /parse-server

ENTRYPOINT ["nyc", "--no-clean=true", "--cache-dir='/parse-server/.nyc_cache'", "--include=cloud","--exclude=**/specInjection.js",  "--reporter=lcov", "--reporter=text-summary", "--reporter=json-summary", "node", "./bin/parse-server"]
