import React, { useEffect, useState } from 'react';
function EffectHookDemo () {
  const [ count, setCount ] = useState(0);
  const [ size, setSize ] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = () => {  
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  useEffect(() => {
    document.title = count;
  })
  // 控制 useEffect 执行
  // 只有 数组每一项都不变的情况
  // 才不会执行
  useEffect(() => {
    window.addEventListener('resize', onResize)
  }, [])
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
      >
        click: {count},
        size: {size.width} X {size.height}
      </button>
  )
}
export default EffectHookDemo;