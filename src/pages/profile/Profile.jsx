import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./Profile.module.css";

export default function Profile() {

  return (<>
    <Header />
    <div className={style.profileWrapper}>
      <div className={style.profileInfo}>

      </div>
      <div className={style.activities}>
        
      </div>
    </div>

    <Footer />
  </>)
}
