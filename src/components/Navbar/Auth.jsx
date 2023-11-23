import { Menu } from "@headlessui/react";
import { Icon } from "../../icons";

const Auth = () => {
  const user = {
    name: "Ramazan Şen",
    avatar:
      "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10205563828349403&height=50&width=50&ext=1703068020&hash=AeRUAZIyhwmzBzxW37M",
  };

  return (
    <Menu as="nav" className="relative z-10">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              alt="Ramazan Şen"
              className="rounded-full w-8 h-8 p-px mr-2"
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={`${open && "rotate-180"}`}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items className="absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/account-settings"
                >
                  Account
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/account-settings"
                >
                  Set up family plan
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="">
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded border-t border-link border-opacity-20 ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="/account-settings"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
