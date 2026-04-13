import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePop from '../hooks/usePop';
import { useSelector } from 'react-redux';
import { deleteById } from '../api/popApi';

function PopDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { fetchPopVoById } = usePop();
  const { vo } = useSelector((state) => state.pop);

  useEffect(() => {
    fetchPopVoById(id);
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return;

    await deleteById(id);
    alert('삭제 완료');

    // 👉 목록으로 이동 (자동 리렌더 효과)
    navigate('/pop/list');
  };

  return (
    <>
      <h1>상세 조회</h1>

      <div>
        <p>번호: {vo.id}</p>
        <p>주제: {vo.topic}</p>
        <p>이름: {vo.name}</p>
        <p>작성일: {vo.createdAt}</p>
      </div>

      <button onClick={() => navigate(`/pop/edit/${vo.id}`)}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate('/pop/list')}>목록</button>
    </>
  );
}

export default PopDetailPage;
