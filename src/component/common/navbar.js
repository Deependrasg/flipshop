import React, {Component} from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'


export default class Navibar extends Component {

    render() {
    return (
      <div>	
      <Navbar>
		  <Nav>
			<NavDropdown eventKey={3} title="Electronics" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>		    
		    <NavDropdown eventKey={3} title="TVs & Appliances" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>
		  	<NavDropdown eventKey={3} title="Men" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>		    
		    <NavDropdown eventKey={3} title="Women" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>
		    <NavDropdown eventKey={3} title="Baby & Kids" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>
		  	<NavDropdown eventKey={3} title="Home & Furniture" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>		    
		    <NavDropdown eventKey={3} title="Sports, Books & More" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>
		     <NavDropdown eventKey={3} title="Offer Zone" id="basic-nav-dropdown">
		      <MenuItem eventKey={3.1}>Action</MenuItem>
		      <MenuItem eventKey={3.2}>Another action</MenuItem>
		      <MenuItem eventKey={3.3}>Something else here</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey={3.4}>Separated link</MenuItem>
		    </NavDropdown>
		  </Nav>
		</Navbar>
	</div>
    )
  }
}