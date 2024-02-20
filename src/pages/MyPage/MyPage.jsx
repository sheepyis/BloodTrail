import styled from 'styled-components';
import colors from '../../styles/color';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyProfile from '../../components/MyProfile/MyProfile';
import MyDonation from '../../components/MyDonation/MyDonation';
import MyCrew from '../../components/MyCrew/MyCrew';
import Credit from '../../components/Credit/Credit';
import MyUpload from '../../components/MyUpload/MyUpload';
import ListMyUpload from '../../components/MyUpload/list-myupload';
import Sidebar from '../../components/Navigation/Sidebar';
import Breadcrums from '../../components/Navigation/Breadcrums';

const MyPageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const MyPageP = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: ${colors.crewGray};
`;

const MyPage = ({ isCredit }) => {
  const [userData, setUserData] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const [wbCount, setWbCount] = useState(0);
  const [pbCount, setPbCount] = useState(0);
  const [plbCount, setPlbCount] = useState(0);

  const refreshAccessToken = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); 
      const refreshToken = localStorage.getItem('refreshToken');
  
    if (!refreshToken) {
      console.log("no refresh!!!");
      return;
    }
  
    console.log(accessToken);
    console.log(refreshToken);
  
    const response = await axios.post(
        'https://bloodtrail.site/auth/regenerate-token',
        {}, // POST 요청 본문이 필요하지 않은 경우 빈 객체 전달
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'refresh': `Bearer ${refreshToken}`
          }
        }
    );
  
    console.log("refresh complete!!!!!!!!!!!!!!!!!!!!");
    console.log(response.data);
    
    } catch (error) {
    console.error('Error refreshing access token: ', error); // 에러 처리
    }
  };

  useEffect(() => {
    const init = async () => {
      await refreshAccessToken();
    };
    init();
  },[]);
  

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get('https://bloodtrail.site/auth/profile', config)
      .then((response) => {
        if (response.data) {
          const user = response.data.result;

          const formattedBirth = new Date(user.birth)
            .toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\./g, '')
            .split(' ')
            .join('.');

          setUserData({
            name: user.nickname,
            username: user.name,
            birth: formattedBirth,
            email: user.email,
            phone: user.phone,
            point: user.point,
            _id: user._id,
            premium: user.premium.payment,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  useEffect(() => {
    if (userData && userData._id) {
      const accessToken = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      axios
        .get('https://bloodtrail.site/history', config)
        .then((response) => {
          if (response.data.isSuccess) {
            setUserHistory(response.data.result.historyList);

            let wb = 0;
            let pb = 0;
            let plb = 0;

            response.data.result.historyList.forEach((record) => {
              if (record.user._id === userData._id) {
                switch (record.type) {
                  case 'WB':
                    wb++;
                    break;
                  case 'PB':
                    pb++;
                    break;
                  case 'PLB':
                    plb++;
                    break;
                  default:
                    break;
                }
              }
            });

            setWbCount(wb);
            setPbCount(pb);
            setPlbCount(plb);

            setUserHistory({
              ...userHistory,
              whole: wbCount,
              plasma: pbCount,
              platelet: plbCount,
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [userData, userHistory]);

  return (
    <MyPageContainer>
      <Sidebar pageLabel="내 정보" currentPage="내 프로필" />

      <div className="right" style={{ width: '67%' }}>
        <Breadcrums pageLabel="내 정보" currentPage="내 프로필" />

        {userData && !userData.premium && <Credit />}

        <div
          className="profile"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '2vw 0 1vw 0',
          }}
        >
          <MyPageP style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>
            내 프로필
          </MyPageP>
        </div>
        <MyProfile userData={userData} userHistory={userHistory} />

        <div className="blood" style={{ width: '100%', marginTop: '2vw' }}>
          <MyPageP
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              color: colors.black,
              marginBottom: '1vw',
            }}
          >
            나의 헌혈 증서
          </MyPageP>
          <MyDonation />
        </div>

        <div className="upload" style={{ width: '100%', marginTop: '2vw' }}>
          <MyPageP
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              color: colors.black,
              marginBottom: '1vw',
            }}
          >
            내가 쓴 글
          </MyPageP>
          <MyUpload />
          <ListMyUpload />
        </div>

        <div
          className="mycrew"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2vw',
          }}
        >
          <MyPageP
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              color: colors.black,
            }}
          >
            나의 헌혈 크루
          </MyPageP>
        </div>
        <MyCrew />
      </div>
    </MyPageContainer>
  );
};

export default MyPage;
