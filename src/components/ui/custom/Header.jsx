import { Button } from "../button"

function Header() {
  return (
    <div className="p-3 shadow-md  flex justify-between items-center px-5">
          <img src="/logo.svg" alt="logo" />
          <div> 
              <Button>Sign-in</Button> 
          </div>
          
         
    </div>
  )
}

export default Header
