// SurveyField containes logic to render a single label and text input

import React from 'react';

export default props => {
  const {
    input,
    label,
    meta: { error, touched },
    ...rest
  } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} value={rest.value} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
