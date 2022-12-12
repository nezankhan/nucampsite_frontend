
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { useState } from 'react';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {


    return (

        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>

    );
};

export default CampsitesDirectoryPage;