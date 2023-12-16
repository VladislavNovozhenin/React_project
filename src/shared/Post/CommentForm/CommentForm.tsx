import React, {FormEvent, useRef, useContext, ChangeEvent, useState } from 'react';
import styles from './commentform.css';
import { MenuComment } from './MenuComment';
import { useUserData } from '../../../hooks/useUserData';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../../store/reducer';
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { textState } from '../../../App';





export function CommentForm() {
// const text = useRecoilValue(textState)
const [text, setText] = useRecoilState(textState);
const [texts, setTexts] = useState('');
  console.log(text)
  // const count = useRecoilValue(charCountState);
// const setText = useSetRecoilState(textState)

  // const value = useSelector<RootState, string>(state => state.commentText)
  // const dispatch = useDispatch();
  const {data} = useUserData()
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // dispatch(updateComment(event.target.value));
    setText(event.target.value)
    console.log(text)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea required className={styles.input} value={text}  onChange={handleChange}/>
      <div className={styles.placeholderName}>{data.name},<span> оставьте ваш комментарий</span></div>
      <div className={styles.content}>
        <MenuComment />
        <button type='submit' onClick={() => setText('2323232')} className={styles.button}>Комментировать</button>
      </div>

    </form>
  );
}
