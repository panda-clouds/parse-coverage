FROM parseplatform/parse-server:2.8.4

USER root

# We can't run this on old '2.8.4'
# RUN apt-get update
# RUN apt-get upgrade -y
# 
# This happens
# Get:6 http://deb.debian.org jessie/main amd64 Packages [9098 kB]
# Fetched 10.2 MB in 6s (1545 kB/s)
# W: Failed to fetch http://deb.debian.org/debian/dists/jessie-updates/InRelease  Unable to find expected entry 'main/binary-amd64/Packages' in Release file (Wrong sources.list entry or malformed file)
# E: Some index files failed to download. They have been ignored, or old ones used instead.

RUN npm i -g nyc && \
    mkdir -p '/parse-server/.nyc_output/processinfo' && \
    mkdir -p '/parse-server/coverage' && \
    mkdir -p '/parse-server/.nyc_cache' && \
    chown -R node /parse-server/.nyc_cache && \
    chown -R node /parse-server/.nyc_output && \
    chown -R node /parse-server/coverage

ENTRYPOINT ["nyc", "--no-clean=true", "--cache-dir='/parse-server/.nyc_cache'", "--include=cloud", "--reporter=lcov", "--reporter=text-summary", "npm", "start"]
