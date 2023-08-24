import React from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
		<motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
			<IoFastFoodOutline />
		</motion.div>

      <div>
        <Link to='/'>Inicio</Link>
        <Link to='/contact'>Contacto</Link>
        <Link to='/about'>Quiénes Somos</Link>
        <Link to='/cart'>
          <FiShoppingCart />
        </Link>

        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;