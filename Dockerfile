FROM node:10
WORKDIR /usr/src/string-class
copy ./ ./
CMD ["/bin/bash"]