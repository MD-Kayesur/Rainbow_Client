import React from 'react';

const Header = ({title, className}) => {
    return (
        <div>
            <h1 className={`${className} font-bold coiny-regular`}>
                {title}
              </h1>
        </div>
    );
};

export default Header;