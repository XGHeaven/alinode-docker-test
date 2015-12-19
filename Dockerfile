FROM xadillax/alinode:1.1.0

ENV APP_ID 939
ENV APP_SECRET 53f0729a88f63449e62e34720114c891ec6dbdc0

COPY . /src

WORKDIR /src

EXPOSE 80

CMD ["node", "index.js"]