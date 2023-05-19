import './home.scss'
import Card from "../card/Card"
function Home() {
  const posts =[
  { head: "Grass Cutting", content: "Looking for lawn cutting services? The Gardener is proud to offer you the best grass cutting & lawn maintenance services in Canada. Prices Range starts from 35$ to 50$ depending on the house"},
  { head: 'Commercial Gardening', content: "Gardening and maintenance services by professional gardeners can help you create and maintain a picturesque landscape for your commercial property. Price Range sarts from 75$"},
  { head: 'Weed Spraying', content: "Let your lawn thrive with weed control. Address your weed problems starting with 70$ only"},
  { head: 'Landscaping Lawn', content: "Our Landscapers give homeowners the full-service experience they demand and deserve prices start at 50$"},
  { head: 'Hedge Trimming', content: "Hedge trimming can be a lot of work and we provide quick and easy professional hedge trimming estimates for a 100$ per hour now"}]
  return (
    <div className="home">
        <div className='home_container'>
            <div className='main'>
                <h1>GREEN HABIT GARDENING</h1>
            </div>
            <p className='para'><b><br></br> <br/>At GREEN HABIT GARDENING, we're passionate about all things gardening.<br/> Whether you're a seasoned gardener or just starting out, we're here to provide<br></br> you with valuable information, tips, and inspiration to help you create beautiful garden.</b>
            </p>
        </div>
        <br/><br/><br/><br/>
        <div className='card_container'>
          {posts.map(post=>(<Card heading={post.head} para={post.content} {...post} key={post.head} />))}
        </div>
    </div>
  )
}



export default Home;
