import { useState, useEffect } from 'react'
import MenuItem_61 from '../../components/mid_xx/MenuItem_61'
import image1 from './images/item-1.jpeg'
import image2 from './images/item-2.jpeg'
import image3 from './images/item-3.jpeg'
import db from '../../db/clientSupabase'
let api_url = 'http://localhost:3000/api/menu_61'
const P3Page_61 = () => {
  const [menu, setMenu] = useState([])
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromNodeServer = async () => {
    try {
      let { data, error } = await supabase.from('blog_xx').select('*')
      // const response = await fetch(api_url)
      // const data = await response.json()
      console.log('supabase blogs', data)
      setBlogs(data)
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
          <h2>latest blogs from Supabase</h2>
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
export default P3Page_61
