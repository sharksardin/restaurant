import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',                 // ✅ 'standalone' 대신 'export'
  basePath: '/restaurant',          // ✅ GitHub Pages repo 이름과 맞춰야 함
  assetPrefix: '/restaurant/',  // 중요: 정적 자원 경로 보정
  images: { unoptimized: true },    // ✅ GitHub Pages에서 이미지 최적화 못 쓰니까 필요
};

export default nextConfig;
