FROM node:lts-alpine
ENV NODE_ENV=production
ENV SQL_SERVER=amdigitalmarketing.database.windows.net
ENV SQL_USER=digital
ENV SQL_PASSWORD='$Ampmeu22'
ENV SQL_PORT=1433
ENV SQL_ENCRYPT=false
ENV SQL_DATABASE=BD_DIGITAL_MARKETING
WORKDIR /usr/src
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src
USER node
CMD ["npm", "start"]
