import { getAllEvents } from "../../dummy-data";
  
import EventList from "../../components/event-list";

function AllEventsPage() {
    const featuredEvents = getAllEvents();
    return (<div>
      <EventList items={featuredEvents} />
    </div>);
}

export default AllEventsPage;