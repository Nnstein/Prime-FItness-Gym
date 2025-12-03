# Stage 1: Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
# Using --legacy-peer-deps to avoid potential conflicts, though standard install should work
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application (Static Export)
# This will create a 'dist' directory (configured in next.config.ts)
RUN npm run build

# Stage 2: Runner
FROM nginx:alpine AS runner

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets from builder stage
# Next.js outputs to 'dist' directory (configured in next.config.ts)
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
