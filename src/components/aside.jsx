import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';

export default function Aside() {
    return <div className="aside">
        <Card>
            <img src="" alt="" />
        </Card>
        <img src={evita} alt="Evita Perón" />
        <h4>Evita Perón</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
}