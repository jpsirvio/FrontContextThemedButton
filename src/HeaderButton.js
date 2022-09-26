import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <div>
      <button style={theme.blue}>Press me</button>
    </div>
  );
}

export default HeaderButton;