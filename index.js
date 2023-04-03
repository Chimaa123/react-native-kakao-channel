import { NativeModules } from 'react-native';

const { ARNKakaoChannel } = NativeModules;

export const addFriend = id => {
  return ARNKakaoChannel.addFriend(id);
};

export const chat = id => {
  return ARNKakaoChannel.chat(id);
};

export const chatNoPromise = id => {
  return ARNKakaoChannel.chatNoPromise(id);
};

export default {
  addFriend,
  chat,
  chatNoPromise,
};
