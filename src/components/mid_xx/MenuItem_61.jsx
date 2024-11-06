const MenuItem_61 = ({ id, title, image, price, descript }) => {
  return (
    <article className='menu-item'>
      <img src={image} alt='eggs' className='photo' />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>{price}</h4>
        </header>
        <p className='item-text'>{descript}</p>
      </div>
    </article>
  )
}

export default MenuItem_61
