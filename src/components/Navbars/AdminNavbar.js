
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader
} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "Guards/Auth";
import { useSelector } from "react-redux";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");

  const studentDetails = useSelector((state) => state.student.studentDetails);


  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };

  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };


  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };


  //This function let's u navigate to other pages
  let history = useHistory();

  const location = useLocation();

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    window.location.reload();
  }

  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened
              })}
            >
              {
                // we don't want the Footer to be rendered on map page
                !(location.pathname.includes('admin')) ?
                  null :
                  <NavbarToggler onClick={props.toggleSidebar}>
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </NavbarToggler>
              }
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto navigation" navbar>
              <NavLink onClick={() => history.push('../home')}>Home</NavLink>
              <NavLink onClick={() => history.push('./leaderboard')}>Leaderboard</NavLink>
              <NavLink onClick={() => history.push('./about')}>About</NavLink>
              {
                !auth.student && (<Button className="text-danger" onClick={() => history.push('./login')}>Login</Button>)}

              {auth.student && (
                <>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      caret
                      color="default"
                      nav
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="photo">
                        <img alt="..." src={require("assets/img/anime3.png")} />
                      </div>
                      <b className="caret d-none d-lg-block d-xl-block" />
                      <p className="d-lg-none">{studentDetails.firstname}</p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                      <NavLink tag="li" className="d-lg-flex d-sm-none">
                        <DropdownItem header className="nav-item" tag="h3">Welcome {studentDetails.firstname}!</DropdownItem>
                      </NavLink>
                        <DropdownItem tag="li" divider/>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item" onClick={() => history.push('../admin/dashboard')}>Dashboard</DropdownItem>
                      </NavLink>
                      <NavLink tag="li">
                        <DropdownItem className="nav-item" onClick={() => history.push('../admin/user-profile')}>Profile</DropdownItem>
                      </NavLink>
                      <DropdownItem divider tag="li" />
                      <NavLink tag="li">
                        <DropdownItem className="nav-item" onClick={() => handleLogout()}>Log out</DropdownItem>
                      </NavLink>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              )
              }

              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default AdminNavbar;
