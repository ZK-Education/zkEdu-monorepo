import Container from "@/components/Container";
import styles from "./page.module.css";

export default function MyAccountPage() {
  return (
    <main className={styles.root}>
      <Container>
        <h1 className="page-title"> My Account</h1>

        <form className={styles.form}>
          <div className="input-group">
            <label htmlFor="first-name">Name</label>
            <input className="input" type="text" id="first-name" />
          </div>

          <div className="input-group">
            <label htmlFor="last-name">Surname</label>
            <input className="input" type="text" id="last-name" />
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input className="input" type="email" id="email" />
          </div>

          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </Container>
    </main>
  );
}
