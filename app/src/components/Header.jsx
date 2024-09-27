import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <Navbar.Brand href="#home">{t('headerShort')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t('navbar.about')}</Nav.Link>
            <Nav.Link href="#contacts">{t('navbar.contacts')}</Nav.Link>
            <Nav.Link href="#address">{t('navbar.address')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;