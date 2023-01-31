import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoLoginRedirect() {
  const code = new URL(window.location.href).searchParams.get('accessToken')
  const navigate = useNavigate(); 
  console.log(code)
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('token', code);
    navigate('/')  
  }, []);   

  return <>
  <div>ppppp</div>
  </>;
}
