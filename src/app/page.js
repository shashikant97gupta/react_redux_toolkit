import Image from "next/image";
import styles from "./page.module.css";
import { AddUsers } from "./components/AddUsers";
import { DisplayUsers } from "./components/DisplayUsers";

export default function Home() {
  return (
    <main className={styles.main}>
      <AddUsers />
      <DisplayUsers />
    </main>
  );
}
