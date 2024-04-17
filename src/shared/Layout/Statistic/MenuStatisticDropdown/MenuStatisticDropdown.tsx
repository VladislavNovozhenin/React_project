import React, { useEffect, useRef, useState } from 'react';
import styles from './menustatisticdropdown.module.css';
import { StatisticDropdown } from '../../../icons/statisticDropdown';
import { Dropdown } from '../../../Dropdown';
import { weekNow } from '../Statistic';

interface IMenuStatisticDropdownProps {
  week: weekNow[]
  weekTimeNow: string
  setWeekTimeNow: React.Dispatch<React.SetStateAction<string>>
}

export function MenuStatisticDropdown({ week, weekTimeNow, setWeekTimeNow }: IMenuStatisticDropdownProps) {
  const menuRef = useRef<HTMLUListElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const newWeek = week.filter(item =>
    item.name !== weekTimeNow
  );

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (isDropdownOpen) { 
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setIsDropdownOpen(isDropdownOpen!)
      }
    }
  }
    document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  }
}, []);


function a() {
  setIsDropdownOpen(!isDropdownOpen)
}

return (
  <Dropdown
    button={
      <div className={styles.dropdown} onClick={a}>
        <div className={styles.dropdownTitle}>
          {weekTimeNow}
        </div>
        <button className={styles.dropdownButton}>
          <StatisticDropdown
            isDropdownOpen={isDropdownOpen}
          />
        </button>
      </div>
    }
  >
    <ul className={styles.dropdownList} ref={menuRef}>
      {newWeek.map(item => {
        return (
          <li key={item.id} className={styles.dropdownItem}>
            <button
              className={styles.MenuBtn}
              onClick={() => setWeekTimeNow(item.name)}
            >
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  </Dropdown>

);
}
