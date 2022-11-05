import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={theme}>Press me</button>
    </div>
  );
}

export default HeaderButton;