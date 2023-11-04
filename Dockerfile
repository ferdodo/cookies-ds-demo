FROM node
WORKDIR /cookies-ds-demo
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm install
RUN npm audit --audit-level=low

FROM cookies-ds

FROM node

COPY --from=0 /cookies-ds-demo/node_modules /cookies-ds-demo/node_modules
COPY --from=1 /cookies-ds /cookies-ds

WORKDIR /cookies-ds-demo
COPY . .
CMD npm run start
