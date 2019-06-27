
Parse Coverage
=========
maintained by [PandaClouds.com](https://pandaclouds.com)

A parse-server docker image that collects code coverage information


Contributions
-------------

How to add a new Parse Version:

1. cd /path/to/my/dir
2. replace x.y.z with the new version `cp spec/3.4.0.spec.js spec/x.y.z.spec.js`
3. replace x.y.z with the new version `cp -r src/3.4.0 src/x.y.z`
4. in src/x.y.z replace `FROM parseplatform/parse-server:3.4.0` with `FROM parseplatform/parse-server:x.y.z`
5. `npm test`
6. `docker login -u pandaclouds`
6. `docker push pandaclouds/parse-coverage`
8. `docker images -a | grep "parse-coverage" | awk '{print $3}' | xargs docker rmi`
7. add your name to 'Contributors' in `README.md`


### Contributors

(Add your name)

- [*] [Marc Smith](https://github.com/mrmarcsmith)
