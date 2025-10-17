import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"
export default function App(){
    const travelData = data.map(travel => (
        <Entry
            key={travel.id}               
            travel={travel}
        />
    ))
    return (
        <>
            <Header/>
            {travelData}
        </>
    )
} 