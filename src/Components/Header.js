import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  console.log(user);

  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("./error");
        console.error("Sign out error:", error);
      });
  };
  const handelGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);
  return (
    <div className="fixed top-0 left-0 bg-gradient-to-b from-black z-50 w-full flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-44 m-8" />

      <div className="p-2">
        {user && (
          <button
            onClick={handelGptSearchClick}
            className="m-6 rounded-lg text-blue-300 "
          >
            GPT Search
          </button>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="text-white hover:text-gray-300"
        >
          <PersonIcon className="h-8 w-8" />
        </button>

        {open && (
          <div className="absolute right-0  w-32 bg-slate-50 rounded shadow-lg">
            <button
              onClick={() => {
                user ? handleSignOut() : handleSignOut();
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {user ? "Sign Out" : "Sign In"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
