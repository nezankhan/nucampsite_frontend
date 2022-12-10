import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

// type rafce type ra to list commands for react snippets

const CampsiteCard = ({campsite}) => {

    const { id, image, name } = campsite;
    return (
        <Link to ={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>

            </Card>
        </Link>

    )
}

export default CampsiteCard;



