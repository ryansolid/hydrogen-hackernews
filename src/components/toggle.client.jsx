import { useState } from 'react';

export default function Toggle(props) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className={open ? 'toggle open' : 'toggle'}>
        <a onClick={() => setOpen((o) => !o)}>
          {open ? '[-]' : '[+] comments collapsed'}
        </a>
      </div>
      <ul class="comment-children" style={{ display: open ? 'block' : 'none' }}>
        {props.children}
      </ul>
    </>
  );
}
