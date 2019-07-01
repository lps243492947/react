import { MemberEntity } from "../model/index";

// 状态的计算，reducer 纯函数
export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch(action.type) {
    case 'FETCH_MEMBER_COMPLETED':
    return action.payload
  }
  return state;
}