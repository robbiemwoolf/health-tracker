export default function Home() {

    const current = new Date();
    const index = current.getDay();
    const week = [ 'Active Rest', 'Push', 'Pull', 'Lower', 'Upper', 'Legs', 'Active Rest' ];
    const day = week[index];    

    return (
        <>
        <h3>Today's Workout: {day}</h3>
        </>
    )
};