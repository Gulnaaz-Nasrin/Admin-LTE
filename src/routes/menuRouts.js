import lazyPreload from "../utils/lazyUtils";
const Contact = lazyPreload(() => import("../menuitems/contact"));
const ContactUs = lazyPreload(() => import("../menuitems/contactUs"));
const menuRoutes = [
  {
    path: "/themes/v3/pages/examples/contacts.html",
    component: <Contact />,
  },
  {
    path: "/themes/v3/pages/examples/contact-us.html",
    component: <ContactUs />,
  },
];
export default menuRoutes;
