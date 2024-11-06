import image1 from '../mid_61/images/item-1.jpeg'
import image2 from '../mid_61/images/item-2.jpeg'
import image3 from '../mid_61/images/item-3.jpeg'
const P1Page_61 = () => {
  return (
    <>
      <section className='menu-demo'>
        <div className='title'>
          <h2>212410061 周浩偉</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button type='button' className='filter-btn' data-id='all'>
            all
          </button>
          <button type='button' className='filter-btn' data-id='breakfast'>
            breakfast
          </button>
          <button type='button' className='filter-btn' data-id='lunch'>
            lunch
          </button>
          <button type='button' className='filter-btn' data-id='dessert'>
            dessert
          </button>
          <button type='button' className='filter-btn' data-id='shakes'>
            shakes
          </button>
        </div>

        <div className='section-center'>
          <article className='menu-item'>
            <img src={image1} alt='eggs' className='photo' />
            <div className='item-info'>
              <header>
                <h4>eggs</h4>
                <h4 className='price'>12.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className='menu-item'>
            <img src={image2} alt='big' salad='' className='photo' />
            <div className='item-info'>
              <header>
                <h4>big salad</h4>
                <h4 className='price'>12.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className='menu-item'>
            <img src={image3} alt='fried' dish='' className='photo' />
            <div className='item-info'>
              <header>
                <h4>fried dish</h4>
                <h4 className='price'>12.59</h4>
              </header>
              <p className='item-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export default P1Page_61
