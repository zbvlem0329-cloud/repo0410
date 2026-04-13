import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findById, updateTopicAndName } from '../api/popApi';

function PopEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vo, setVo] = useState({
    id: id,
    topic: '',
    name: '',
  });

  useEffect(() => {
    async function fetchData() {
      const resp = await findById(id);
      setVo(resp.data);
    }
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setVo({
      ...vo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateTopicAndName(vo);
    alert('수정 완료');

    navigate(`/pop/detail/${id}`);
  };

  return (
    <>
      <h1>수정 페이지</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>주제</label>
          <input
            type="text"
            name="topic"
            value={vo.topic}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={vo.name}
            onChange={handleChange}
          />
        </div>

        <button type="submit">수정 완료</button>
        <button type="button" onClick={() => navigate(-1)}>
          취소
        </button>
      </form>
    </>
  );
}

export default PopEditPage;
