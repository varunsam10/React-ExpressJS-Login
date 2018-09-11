import React from 'react';
import {  Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="black" className="font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3" >
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.onwardsmediagroup.com/"> OnwardsMediaGroup </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;