import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Textarea from 'components/Form/Textarea';
import Checkbox from 'components/Form/Checkbox';
import Button from 'components/Button';

import { formSchema } from './Form.validation';
import { FormProps, FormValues } from './Form.types';
import styles from './Form.module.scss';
import { checkValues, projectTypes } from './Form.constants';
import { toast } from 'react-toastify';

const Form: FC<FormProps> = ({ handleClose }) => {
  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      type: projectTypes[0].name,
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    reset();
    toast('Data uploaded');
  };

  const handleCheck = (value?: string) => {
    if (!value) {
      if (getValues('expert')?.length === checkValues.length) {
        setValue('expert', []);
      } else {
        setValue('expert', checkValues);
      }
    } else {
      const expert = getValues('expert') || [];

      if (!expert.some(element => element === value)) {
        expert.push(value);
      } else {
        const index = expert.indexOf(value);

        expert.splice(index, 1);
      }
      setValue('expert', expert);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <Input
            error={errors.name?.message}
            label="Project name"
            placeholder="E.g. Microsoft Research"
            id="name"
            type="text"
            register={register}
            required
          />
          <Select
            id="type"
            label="Project type"
            error={errors.type?.message}
            className={styles.input}
            onSelect={value => setValue('type', value.name)}
            value={watch('type')}
            elements={projectTypes}
            showIcon
            required
          />
          {watch('type') === 'Company Research' && (
            <Input
              error={errors.companies?.message}
              label="Companies"
              placeholder="E.g. Microsoft"
              id="companies"
              type="text"
              register={register}
              required
            />
          )}
          <Input
            error={errors.description?.message}
            label="Project Description"
            placeholder="Please define the purpose for this project."
            id="description"
            type="text"
            register={register}
          />
          <Textarea
            error={errors.scope?.message}
            label="Project Scope"
            placeholder="Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert screening stage."
            id="scope"
            type="text"
            register={register}
          />

          <div className={styles.checkbox}>
            <span>
              Expert <span>*</span>
            </span>

            <div>
              <Checkbox
                text="All"
                onCheck={() => handleCheck()}
                checked={watch('expert')?.length === checkValues.length}
                error={errors.expert?.message && !watch('expert')?.length}
              />

              {checkValues.map((value, index) => (
                <Checkbox
                  key={index}
                  text={value}
                  onCheck={handleCheck}
                  checked={watch('expert')?.some(element => element === value)}
                  error={errors.expert?.message && !watch('expert')?.length}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button className={styles.upload}>Upload</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
