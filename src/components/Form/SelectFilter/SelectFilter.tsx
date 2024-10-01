import React, { FC, useEffect, useState } from 'react';

import { Company } from 'api/financial/financial.types';

import iconArrow from 'assets/icons/arrow.svg';

import Input from 'components/Form/Input';

import styles from './SelectFilter.module.scss';
import { SelectFilterTypes } from './SelectFilter.types';

const SelectFilter: FC<SelectFilterTypes> = ({
  error,
  label,
  className,
  placeholder,
  id,
  type,
  register,
  elements,
  showIcon,
  required,
  onSelect,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<Company[]>(elements);

  useEffect(() => {
    setOptions(elements);
  }, [elements]);

  return (
    <div className={styles.container}>
      <Input
        label={label}
        id={id}
        type={type}
        className={className}
        error={error}
        handleFocus={setShowOptions}
        placeholder={placeholder}
        register={register}
        required={required}
        {...props}
      />

      {showIcon && (
        <img
          src={iconArrow}
          className={`${styles.icon} ${label && styles.marginIcon}`}
          alt="arrow"
          width={24}
          height={24}
        />
      )}

      {showOptions && (
        <div className={`${styles.options} ${label && styles.marginOption}`}>
          {options.map((option, index) => (
            <div key={`${option.symbol}-${index}`} onClick={() => onSelect(option)}>
              <span className={styles.symbol}>{option.symbol}</span>
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
