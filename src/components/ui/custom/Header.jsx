import { useEffect,useState } from "react";
import { Button } from "../button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (user) {
      console.log(user);
      console.log(user.picture);
    } else {
      console.log("No user found in local storage.");
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log("Login successful:", codeResponse);

      // Assuming codeResponse contains the access token
      const { access_token } = codeResponse; // Extract the access token

      // Call GetUser Profile with the access token
      if (access_token) {
        await GetUserProfile({ access_token });
      } else {
        console.error("No access token received.");
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const GetUserProfile = async (tokenInfo) => {
    console.log("Fetching user profile with token:", tokenInfo?.access_token);

    try {
      const resp = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      );
      console.log("Response received:", resp); // Log the full response object
      console.log("User  Profile Data:", resp.data); // Log the data part of the response
      localStorage.setItem("user", JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload()
    } catch (error) {
      console.error(
        "Error fetching user profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="p-3 shadow-md flex justify-between items-center px-5">
      <img src="/logo.svg" alt="logo" />
      <div className="font-bold text-red-600 text-4xl">AI Trip Planner</div>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            
            <a href='/my-trips'>
              <Button variant="outline" className="rounded-full">My Trips</Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <img src={user.picture} alt="User  Profile" className="w-[35px] h-[35px] rounded-full" />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>
                  Sign out
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
            <Button onClick={()=>setOpenDialog(true)}>Sign-in</Button>
        )}
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <div>Sign In With Google authentication securely</div>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;


//!since button is not inside routerprovider so we have to wrap ny trip button inside <a>tag