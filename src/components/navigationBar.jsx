import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import search from '../assets/icons/search.svg';
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Collapse,

    InputGroup,
    Input,
    Button,

    Modal,
    ModalBody,
    ModalFooter,

    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

function CardModal() {
    return <Card color="light" outline>
        <CardHeader>
            <b>Jhon Doe</b>
        </CardHeader>
        <CardBody>
            <CardTitle tag="h6">Jhon Doe Message</CardTitle>
            <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A accusamus eos odit.
            </CardText>
        </CardBody>
    </Card>
}

export default function Navigation({ className = "" }) {
    const [collapsed, setCollapsed] = useState(true);
    const [modal, setModal] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const toggleModal = () => setModal(!modal);

    return <Navbar color="dark" dark className={`navbar-expand-md ${className}`}>
        <NavLink className="navbar-brand" to="/">
            <img src="/argentina.svg" alt="Logo de la Argentina" style={{height: 30, width: 30}} />
            Argentina Política
        </NavLink>
        <InputGroup className="mx-5 d-none d-md-flex">
            <Input name="search" id="search" placeholder="Buscar" />
            <Button>
                <img src={search} alt="Buscar" className="search" />
            </Button>
        </InputGroup>
        <Button className="ms-auto me-3 d-md-none" onClick={toggleModal}>
            <img src={search} alt="Buscar" className="search" />
        </Button>

        <Modal isOpen={modal} toggle={toggleModal}>
            <div className="modal-header">
                <InputGroup>
                    <Input name="search" id="search" placeholder="Buscar" />
                    <Button>
                        <img src={search} alt="Buscar" className="search" />
                    </Button>
                </InputGroup>
            </div>
            <ModalBody>
                {false && <i>Escribe para buscar</i>}
                {true && <><CardModal /><CardModal /><CardModal /></>}
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>

        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className="ms-auto">
                <NavItem className="my-1 my-md-0">
                    <NavLink
                        to="/peronismo"
                        className={({isActive}) => 
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Peronismo
                    </NavLink>
                </NavItem>
                <NavItem className="my-1 my-md-0">
                    <NavLink
                        to="/menemismo"
                        className={({isActive}) => 
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Menemismo
                    </NavLink>
                </NavItem>
                <NavItem className="my-1 my-md-0">
                    <NavLink
                        to="/kirchnerismo"
                        className={({isActive}) => 
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        Kirchnerismo
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
}