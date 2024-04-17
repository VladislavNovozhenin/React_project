import React, { useEffect } from 'react';
import styles from './dropdown.module.css';
import { useRef } from 'react';


interface IDropdownProps {
  // setIsDropdownMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void;
  left?: number,
  top?: number
}

const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  // Скрыть меню по клику вне него 
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container} ref={menuRef} >
      <div className={styles.content} onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen &&
        <div className={styles.listContainer}>
          <div className={styles.list} >
            {children }
          </div>
        </div>
      }
    </div>
  );
}
