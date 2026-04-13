import { useDispatch, useSelector } from 'react-redux';
import { setVo, setVoList } from '../store/popSlice';
import { useNavigate } from 'react-router-dom';
import { findAll, findById, save } from '../api/popApi';
import { updateTopicAndName } from '../api/popApi';

export default function usePop() {
  const dispatch = useDispatch();

  const { voList, vo } = useSelector((state) => state.pop);

  const navigate = useNavigate();

  const insertPop = async (vo) => {
    try {
      const resp = await save(vo);
      console.log('등록 성공:', resp.data);

      // 등록 후 목록 페이지로 이동 (원하면 수정 가능)
      navigate('/pop/list');
    } catch (err) {
      console.error('등록 실패:', err);
    }
  };
  const updatePop = async (vo) => {
    try {
      await updateTopicAndName(vo);
      alert('수정 완료');
      navigate(`/pop/${vo.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  async function fetchPopVoList() {
    const resp = await findAll();
    dispatch(setVoList(resp.data));
  }

  async function fetchPopVoById(id) {
    const resp = await findById(id);
    dispatch(setVo(resp.data));
  }

  return {
    voList,
    fetchPopVoList,
    vo,
    fetchPopVoById,
    insertPop,
    updatePop,
  };
}
