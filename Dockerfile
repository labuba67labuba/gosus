# ============================
# BUILDER
# ============================
FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_API_DOMAIN
ARG VITE_REDIRECT_URL
ENV VITE_API_DOMAIN=$VITE_API_DOMAIN
ENV VITE_REDIRECT_URL=$VITE_REDIRECT_URL

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ============================
# RUNNER
# ============================
FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g serve && \
    apk add --no-cache wget

COPY --from=builder /app/dist ./dist

EXPOSE 3100

HEALTHCHECK CMD wget -qO- http://localhost:3100/ || exit 1

CMD ["serve", "-s", "dist", "-l", "3100"]
