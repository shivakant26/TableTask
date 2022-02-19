import React from 'react';
import Menu from './Menu';
import { Row, Col } from 'react-bootstrap'
class Header extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='header'>
                    <Row>
                        <Col sm={4}><h2>Crud</h2></Col>
                        <Col sm={8}>
                            <Menu />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Header;