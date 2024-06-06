import "../assets/HomePage.css"
import  '../lib/dataset.json'
import Carousel from '../components/Carousel'


// function App() {
//     return <div className='App'>
//         <Carousel />
//     </div>
// }

export default function HomePage() {


    return (
        <>
            <div className='first-view'>
                <div className="box boxL">"My friends love my gifts now that I buy them from Lupine Creative!!!!!"<br></br>-Harper from IA</div>
                <img className="image" src= "/model.images/favs.JPG"/>
                <div className="box boxR">"I love Everything Maggie makes! I am constantly getting complements on her pieces!!!" <br></br>-Sherry from AZ </div>
            </div>
            <div className="banner">Explore Our Artisian Handmade Crafts!!</div>
            {/* <div className="Home-Page">
                <div className="Spotlight">
                    <Carousel product={data}/>
                </div>
            </div> */}
            {/* <Carousel /> */}
        </>
    )
}
