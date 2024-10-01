import React, { FC, useEffect, useRef, useState } from 'react';

import { Company } from 'api/financial/financial.types';

import iconArrow from 'assets/icons/arrow.svg';

import styles from './Select.module.scss';
import { SelectTypes } from './Select.types';

const Select: FC<SelectTypes> = ({
  label,
  id,
  elements,
  showIcon,
  required,
  value,
  error,
  onSelect,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<Company[]>(elements);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOptions(elements);
  }, [elements]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  const handleShopOptions = () => {
    setShowOptions(prevState => !prevState);
  };

  const handleSelect = (option: any) => {
    handleShopOptions();
    onSelect(option);
  };

  return (
    <div className={styles.container} ref={wrapperRef}>
      {label && (
        <label htmlFor={id}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <div className={`${styles.value} ${error && styles.hasError}`} onClick={handleShopOptions}>
        <span>{value}</span>
      </div>

      <div className={styles.error}>{error && <small>{error}</small>}</div>

      {showIcon && (
        <img
          src={iconArrow}
          className={`${styles.icon} ${label && styles.marginIcon}`}
          alt="arrow"
          width={24}
          height={24}
          onClick={handleShopOptions}
        />
      )}

      {showOptions && (
        <div className={`${styles.options} ${label && styles.marginOption}`}>
          {options.map((option, index) => (
            <div key={`${option.symbol}-${index}`} onClick={() => handleSelect(option)}>
              <span className={styles.symbol}>{option.symbol}</span>
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
