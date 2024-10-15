import { cn } from "@/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import DTLDisplay from "./DTLDisplay";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.root}>
      <Link className={cn(styles.brand, "pressable")} href="/">
        <span>zk</span>
        <span className="fg-accent">Edu</span>
      </Link>

      <div className={styles.nav}>
        <Link href="/hesabim" className="btn btn-flat">
          My Account
        </Link>

        <DTLDisplay />

        <ConnectButton showBalance={false} />
      </div>
    </header>
  );
}
