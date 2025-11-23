# ---- Stage 1: Builder ----
FROM node:22-slim AS builder
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@8.10.2 --activate
COPY package.json pnpm-lock.yaml* ./
RUN pnpm fetch
COPY . .
RUN pnpm run build

# ---- Stage 2: Server ----
FROM node:22-alpine AS runtime
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 4000
CMD ["serve", "-s", "dist", "-l", "4000"]
