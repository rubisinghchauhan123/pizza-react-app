import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <div className="hero py-16px">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em> Are You Hungry </em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't Wait</h1>
                        <button className="px-6 py-2 rounded-full text-#000 font-bold ml-4 bg-yellow-500 hover:bg-yellow-600 ">Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img className="4/5" src="/Images/pizza.png" alt="pizza" />
                    </div>
                </div>
            </div>
            <div className="pb-24">

            </div>
            < Products />
        </>
    )
}

export default Home;