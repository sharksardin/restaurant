# 1. Builder 스테이지: 의존성 설치 및 프로덕션 빌드
FROM node:20-alpine AS builder
WORKDIR /app

# package.json과 lock 파일을 먼저 복사하여 의존성 캐싱 활용
COPY package*.json ./
RUN npm ci

# 소스코드 복사
COPY . .

# 프로덕션 빌드 실행
RUN npm run build

# 2. Runner 스테이지: 빌드 결과물만 포함하여 이미지 크기 최소화
FROM node:20-alpine AS runner
WORKDIR /app

# 보안을 위해 non-root 유저 생성
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Builder 스테이지에서 빌드된 결과물만 복사
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 생성한 유저로 전환
USER nextjs

# 3000번 포트 노출
EXPOSE 3000

# 서버 시작 명령어
CMD ["node", "server.js"]