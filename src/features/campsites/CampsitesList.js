import { selectAllCampsites } from './campsitesSlice';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";



const CampsitesList = () => {

    const campsites = selectAllCampsites();
    

    return (
        <Row className='ms-auto'>
            {
                campsites.map((campsite) => {
                    return (
                        <Col md='5' className='m-4' key={campsite.id}>
                            <CampsiteCard campsite={campsite}/>
                        </Col>
                    )
                }
                )
            }
        </Row>
    )
};

export default CampsitesList;