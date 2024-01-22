import './App.css';
import { useState } from 'react';
import KakaoLogin from 'react-kakao-login';

function App() {
  let [userInfo, setUserInfo] = useState(null);
  let [token, setToken] = useState(null);

  let responseKaKao = (user) => {
    // 카카오 로그인 후 처리 로직
    console.log(user);
    setUserInfo(user.profile);
    setToken(user.response.access_token)
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Haru</h4>
      </div>

      {userInfo ? (
        <div>
          <p>{`id: ${userInfo.id}님!`}</p>
          <p>{`nickname: ${userInfo.properties.nickname}`}</p>
          <p>{`token: ${token}`}</p>
        </div>
      ) : (
        <KakaoLogin
          token="a93d33085b2da6c840d7bb6641552aee"
          onSuccess={responseKaKao}
          onFail={(err) => console.log(err)}
          onLogout={(err) => console.log(err)}
        />
      )}
    </div>
  );
};

export default App;