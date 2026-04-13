import React, { useState } from 'react';
import usePop from './../hooks/usePop';

function PopInsertPage() {
  const { insertPop } = usePop();

  const [vo, setVo] = useState({
    topic: '',
    name: '',
  });

  const handleChange = (e) => {
    setVo({
      ...vo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertPop(vo);
  };

  return (
    <>
      <h1>인기글 등록</h1>

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

        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default PopInsertPage;
