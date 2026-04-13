import api from '../../../app/api/axios';

export async function save(vo) {
  return await api.post(`pop`, vo);
}

export async function findAll() {
  return await api.get(`pop`);
}

export async function findById(id) {
  return await api.get(`pop/${id}`);
}

export async function deleteById(id) {
  return await api.delete(`pop/${id}`);
}

export async function updateTopicAndName(vo) {
  return await api.put(`pop/${vo.id}`, vo);
}
