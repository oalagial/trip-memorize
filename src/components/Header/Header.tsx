import React from "react";
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const Header: React.FC = props => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>  void {

  }

    return (
      <div>
          <Button variant="outlined">Outlined</Button>

      </div>
    );
};

Header.propTypes = {
    
};

export default Header;