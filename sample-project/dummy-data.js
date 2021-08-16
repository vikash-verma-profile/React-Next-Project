const Dummy_events = [
    {

        id: 'e1',
        title: "Programming for everyone 1",
        Description: "Everyone can learn code ! 2",
        location: 'New Delhi',
        date: "12-06-2021",
        image: 'images/image2.jpg',
        isFeatured: true
    },
    {

        id: 'e2',
        title: "Programming for everyone 2",
        Description: "Everyone can learn code 2 !",
        location: 'Mumbai',
        date: "15-08-2021",
        image: 'images/image3.jpg',
        isFeatured: false
    },

    {

        id: 'e3',
        title: "Programming for everyone 3",
        Description: "Everyone can learn code 3 !",
        location: 'Kolkata',
        date: "12-09-2021",
        image: 'images/image3.jpg',
        isFeatured: false
    },
];

export function getFeaturedEvents() {
    return Dummy_events.filter((event) => event.isFeatured);
}
export function getAllEvents() {
    return Dummy_events;
}
export function getFilteredEvents(dataFilter) {
    const { year, month } = dataeFilter;
    let filteredEvents = Dummy_events.filter((events) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() == month - 1;
    });
}
export  function getEventDetailsByID(Id){
    return Dummy_events.find((event)=>event.id==Id);
}