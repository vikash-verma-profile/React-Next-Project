import {useRouter} from 'next/router';
import { getEventDetailsByID } from '../../dummy-data';

function EventDetailPage() {

    const router=useRouter();

    const eventId=router.query.eventId;
    const event=getEventDetailsByID(eventId);
    if(!event){
        return <p>No event found!</p>;
    }


    return (<div>
        <h1>{event.Description}</h1>
    </div>);
}
export default EventDetailPage;