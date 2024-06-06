
import data from '../lib/dataset.json'
import Carousel from '../components/Carousel'


// function App() {
//     return <div className='App'>
//         <Carousel />
//     </div>
// }

export default function HomePage() {


    return (
        <>
            {/* <div className="Home-Page">
                <div className="Spotlight">
                    <Carousel product={data}/>
                </div>
            </div> */}
            <Carousel />
        </>
    )
}
