import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ModalBase from '../ModalBase';

import styles from './index.module.css';

const AddPokemonModal = ({ active, onSubmit }) => {
  const [nickname, setNickname] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(nickname);
  };

  const handleNicknameChange = e => {
    const {
      target: { value }
    } = e;
    setNickname(value);
  };

  return (
    <ModalBase active={active}>
      <form onSubmit={handleSubmit} className={styles.modal__form}>
        <p>Add Pokemon Nickname</p>
        <input className={styles.form__input} onChange={handleNicknameChange} />
        <div className={styles['form__submit-wrapper']}>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </ModalBase>
  );
};

AddPokemonModal.propTypes = {
  active: PropTypes.bool,
  onSubmit: PropTypes.func
};

AddPokemonModal.defaultProps = {
  active: false,
  onSubmit: () => {}
};

export default AddPokemonModal;
