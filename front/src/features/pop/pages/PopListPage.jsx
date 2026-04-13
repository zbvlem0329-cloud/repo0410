import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import usePop from '../hooks/usePop';
import { useNavigate } from 'react-router-dom';

function PopListPage() {
  const { voList } = useSelector((state) => state.pop);
  const { fetchPopVoList } = usePop();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPopVoList();
  }, []);

  return (
    <>
      <h1>인기글 목록</h1>

      <button onClick={() => navigate('/pop/insert')}>등록하러 가기</button>

      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>주제</th>
          </tr>
        </thead>

        <tbody>
          {voList.length === 0 ? (
            <tr>
              <td colSpan="2">데이터 없음</td>
            </tr>
          ) : (
            voList.map((vo) => (
              <tr key={vo.id} onClick={() => navigate(`/pop/detail/${vo.id}`)}>
                <td>{vo.id}</td>
                <td>{vo.topic}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default PopListPage;
