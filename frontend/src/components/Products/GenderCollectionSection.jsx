import mensCollectionImage from '../../assets/images/mens-collection.jpg'
import womensCollectionImage from '../../assets/images/womens-collection.jpg'
const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
            {/* women collection */}
            <div className="relative flex-1">
                <img src={womensCollectionImage} alt=""  className='w-full h-[700px] object-cover'/>
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3" >
                        Women's Collection
                    </h2>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GenderCollectionSection