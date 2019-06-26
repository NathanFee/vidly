import React from "react";

const Input = ({ name, label, value, onChange, autoFocus, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
