
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById  } from '../features/campsites/campsitesSlice';
import {useState} from 'react';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();
    // const toggleCampsite = () =>{
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // }; <Button onClick ={() => toggleCampsite(selectRandomCampsite())}>Select Random Campsite</Button>
    // const [campsiteId, setCampsiteId ] = useState(0)
    // const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        // <Container>
           
        //     <Row>
        //         <Col sm='5' md='7'>
        //             <CampsitesList setCampsiteId={setCampsiteId}>

        //             </CampsitesList>
        //         </Col>
        //         <Col sm='7' md='5'>
        //             <CampsiteDetail campsite ={selectedCampsite}>
                       
        //             </CampsiteDetail>
        //         </Col>
        //     </Row>
        // </Container>
            <Container>
                <SubHeader current='Directory'/>
                <CampsitesList />
            </Container>

    );
};

export default CampsitesDirectoryPage;