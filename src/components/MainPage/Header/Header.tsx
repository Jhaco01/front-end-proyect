import './Header.scss'

export const Header = () => {
  return (
    <header>
      <div className="header">

        <div className="image-div">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
        </div>
        <div className="form-nav-div">
          <div className="form-nav-div__form-div">
            <form className='form'>
              <input className='input' type="text" />
              <button> search </button>
            </form>
          </div>
          <div className="form-nav-div__nav-div">
            <nav>
              <ul>
                <li><a href="#">Any</a></li>
                <li><a href="#">Any</a></li>
                <li><a href="#">Any</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="nav-div">
          <ul>
            <li><a href="#">any</a></li>
            <li><a href="#">any</a></li>
            <li><a href="#">any</a></li>
          </ul>
        </div>        
      </div>
    </header>
  )
}
