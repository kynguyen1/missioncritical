import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="p-2 w-full flex space-x-4 bg-MISSIONblack text-white md:px-16">
      <img
        className="h-12 justify-start space-x-1"
        src="/images/rocket-logo.png"
        alt="AdvanceTEC"
      />
      <div className="p-2 w-full justify-start text-white md:px-16">Mission Critical</div>
      <div className="p-2 w-full flex space-x-4 justify-end text-white md:px-16">
      <div>
        <Link to={`/`}>Home</Link>
      </div>
      <div>
        <Link to={'/'}>Personal</Link>
      </div>
      <div>
        <Link to={'/'}>Scoreboard</Link>
      </div>
      <div>
        <Link to={'/'}>Blog</Link>
      </div>
      <div>
        <Link to={'/'}>Login/Sign-Up</Link>
      </div>
      </div>
    </div>
  )
}
export default Nav
