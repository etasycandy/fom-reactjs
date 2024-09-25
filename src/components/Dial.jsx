import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { PlusIcon, HomeIcon, CogIcon } from "@heroicons/react/24/outline";

const Dial = () => {
  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton
              variant="gradient"
              color="light-blue"
              size="lg"
              className="rounded-full border-2 border-blue-gray-50 border-opacity-40 shadow-xl"
            >
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10">
            <SpeedDialAction className="bg-blue-gray-50">
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <i className="fa-brands fa-facebook-messenger text-xl"></i>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
};

export default Dial;
