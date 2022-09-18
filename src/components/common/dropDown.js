const DropDown = (props) => {
  const { title, data, isReverse = false, type = 'simple', isOpen, onClick } = props;

  const renderItems = () => {
    if (type === 'object') {
      return Object.keys(data).map((key, index) => {
        return (
          <li
            className='common-drop-down__item'
            style={{textAlign: 'left'}}
          >
            <span className='common-drop-down__item-type'>
              {key}:
            </span>
            {data[key]}
          </li>
        );
      });
    }

    return data.map((item) => {
      return <li className='common-drop-down__item'>{item}</li>
    })
  };

  return(
    <div className='common-drop-down'
         style={{
           flexDirection: isReverse ? 'column-reverse' : 'column',
           width: type === 'simple' ? '250px' : '400px',
         }}>
      <span onClick={onClick} className='common-drop-down__title title'> {title} </span>
      {isOpen &&
        <ul className='common-drop-down__list' style={{transition: 'height .5s'}}>
            {renderItems()}
        </ul>}
    </div>
  )
};

export default DropDown;