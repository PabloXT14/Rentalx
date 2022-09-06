FROM node

WORKDIR /usr/app

# COPY => o que e para onde (o arquivo package.json para /usr/app)
COPY package.json ./

RUN npm install

# COPY => tudo da pasta local para a pasta /usr/app
COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]