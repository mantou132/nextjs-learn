import { useRef, useState } from 'react';
import Layout from '../components/layout';
import DuoyunColorPick, { DuoyunColorPickMethods } from 'duoyun-ui/react/DuoyunColorPick';
import DuoyunCard from 'duoyun-ui/react/DuoyunCard';
import DuoyunButton from 'duoyun-ui/react/DuoyunButton';
import DuoyunSpace from 'duoyun-ui/react/DuoyunSpace';
import DuoyunParagraph from 'duoyun-ui/react/DuoyunParagraph';

export default function Text() {
  const colorRef = useRef<DuoyunColorPickMethods>(null)
  const [color, changeColor] = useState('#aaa')

  return <Layout layout='test'>
    <DuoyunParagraph>
      <DuoyunSpace>
        <DuoyunButton onClick={() => colorRef.current?.showPicker()}>Open Color Picker</DuoyunButton>
        <DuoyunColorPick ref={colorRef} value={color} onchange={e => changeColor(e.detail)}></DuoyunColorPick>
      </DuoyunSpace>
    </DuoyunParagraph>
    
    <DuoyunCard
      style={{ width: '300px' }}
      avatar="https://api.dicebear.com/5.x/bottts-neutral/svg"
      preview="https://picsum.photos/400/300"
      header={`This is Card`}
      detail={`CE`}
      actions={[{ text: "Action1", handle: console.log }, { text: "Action2", handle: console.log }, { text: "Action3", handle: console.log }, { text: "Action4", handle: console.log }, { text: "Action5", handle: console.log }]}
    >
      Fugiat do laboris ad officia in anim qui mollit nulla reprehenderit pariatur anim sunt.
    </DuoyunCard>
  </Layout>
}