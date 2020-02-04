# 바벨 설치하기 (nodejs 가 먼저 설치되어 있어야 겠지요)
npm install @babel/core @babel/cli @babel/preset-react

# 바벨로 코드 변환하기
npx babel --watch src --out-dir . --presets @babel/preset-react