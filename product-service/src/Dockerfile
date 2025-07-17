# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY src/package*.json ./
RUN npm install --production
COPY src/ .

# Final stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3001
CMD ["npm", "start"]