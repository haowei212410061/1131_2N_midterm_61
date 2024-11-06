import { useState, useEffect } from 'react'
import MenuItem_61 from '../../components/mid_xx/MenuItem_61'
import image1 from './images/item-1.jpeg'
import image2 from './images/item-2.jpeg'
import image3 from './images/item-3.jpeg'
let api_url = 'http://localhost:3000/api/menu_61'
const P2Page_61 = () => {
  const [menu, setMenu] = useState([])
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromNodeServer = async () => {
    try {
      const response = await fetch(api_url)
      const data = await response.json()
      console.log('menu', data, data[0].img)
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogsFromNodeServer()
  }, [])

  return (
    <>
      <section className='menu-demo'>
        <div className='title'>
          <h2>supabase:212410061 周浩偉</h2>
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
          {menu.map((item) => {
            return (
              <MenuItem_61
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.id === 1 ? image1 : item.id === 2 ? image2 : image3}
                price={item.price}
                descript={item.descript}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
export default P2Page_61
