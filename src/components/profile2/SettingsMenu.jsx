import React from 'react';

export const SettingsMenu = ({ children, className }) => {
  return (
    <div className={`settings-menu ${className}`}>
      {children}
    </div>
  );
};

SettingsMenu.Item = ({ label, icon, selected }) => (
  <div className={`settings-item ${selected ? 'selected' : ''}`}>
    {icon && <i className={`icon-${icon}`}></i>}
    <span>{label}</span>
  </div>
);
