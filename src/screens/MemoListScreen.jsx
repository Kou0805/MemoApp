import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => < LogOutButton />
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    // userを取得
    const { currentUser } = firebase.auth();
    // letの理由→const unsubascribeで再定義し直すため
    let unsubscribe = () => {};
    if (currentUser) {
      // update,desc共にfirebaseのプロパティ
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updateAt', 'desc');
      //
      const unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        // データが入ってるか確認
        // console.log('データが空？', snapshot.empty);
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          // データを確認
          // console.log('データが空2？', snapshot.empty);
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updateAt: data.updateAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoCreate'); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
