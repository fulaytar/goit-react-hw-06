import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
/* import Contact from "../Contact/Contact"; */

export default function ContactList() {
  const items = useSelector((state) => state.contacts.items);
  console.log(items);
  return (
    <ul className={css.list}>
      {items.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}
