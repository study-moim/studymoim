const REST_API_KEY = '98268e53473ceb3e11dd6e609a5fa990'
const REDIRECT_URI = 'http://localhost:8080/oauth/login'

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;