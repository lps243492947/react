import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model';
import { members } from '../../../api/member/mockData';
import { string } from 'prop-types';

export const fetchMembersAction = () => (dispatch) => {
  memberAPI.fetchMembers()
    .then(members => {
      // 下一个动作
      dispatch(fetchMembersCompleted(members))
    })
}

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payload: members
})