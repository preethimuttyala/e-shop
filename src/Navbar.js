import React from 'react';
import SearchBox from './SearchBox';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar ({onSearch,count}) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
    return( 
        <>
        
            <div className='container-fluid'>
                <div className='logo'style={{backgroundColor:"#0000ff"}} >
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" style={{color:"#ffff",fontWeight:"bold",textAlign:"center"}} href="#">Shopify</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>  </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto"></ul>
                        <div className='' >
                        <form className="form-inline d-flex px-2 ms-4">
                           <SearchBox onSearch={onSearch}/>
                            {/* <button className="btn btn-success my-2 my-sm-0" type="submit">Submit</button> */}
                            </form>
                        </div>
                    </div>
                    <div>

                    </div>
            
                  <div className="me-4"  style={{color:"#ffff"}}><IconButton aria-label="cart">
                         <StyledBadge badgeContent={count} color="secondary">
                        <ShoppingCartIcon />
                        </StyledBadge>
                      </IconButton> </div>

                    </nav>
                </div>
            </div>
             
        
        </>
    )
};

export default Navbar;