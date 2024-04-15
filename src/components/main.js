import styles from './all.module.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Mainpage() {


  const handleButtonClick = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div>
            <section className={styles.main_container}>
  <div className={styles.main}>
    <div className={styles.big_circle}>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png" alt="web design icon" width="64" height="64"/>
      </div>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png" alt="game design icon" width="64" height="64"/>
      </div>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png" alt="game dev icon" width="64" height="64"/>
      </div>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png" alt="ui-ux icon" width="64" height="64"/>
      </div>
    </div>
    <div className={styles.circle}>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png" alt="app icon" width="64" height="64"/>
      </div>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png" alt="blockchain icon" width="64" height="64"/>
      </div>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png" alt="ar-vr icon" width="64" height="64"/>
      </div>
      <div className={styles.icon_block}>
        <img src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png" width="64" height="64"alt="artificial intelligence icon" />
      </div>
    </div>
    <div className={styles.center_logo} onClick={handleButtonClick}>
      <img src="/images/logo1.png" alt="logo" width="64" height="64"/>
    </div>
  </div>
</section>
    </div>


    <div className={styles.section2}>
      <div className={styles.section2__img}></div>
      <div className={styles.section2__text}>
        <h1>Bizning omborimizga xush kelibsiz!</h1>
        <Link to="/products">
                
        <Button variant="contained"
        sx={{
          backgroundColor:'#3e5ada',
          width:"80%",
          height:"60px",
          borderRadius:"20px",
          position:"relative",
          top:"42%"
        }}
        >Keyingisi</Button>

              </Link>
      </div>
    </div>


    {/* <div className={styles.section3}>
        
      <div className={styles.section3__img1}>
        
      <Button variant="contained"
        sx={{
          backgroundColor:'#fff',
          color:'#3e5ada',
          width:"80%",
          height:"60px",
          borderRadius:"20px",
          position:"relative",
          top:"25%"
        }}
        onClick={handleButtonClick}
        >Yuqoriga</Button>
      </div>
      <div className={styles.section3__img2}>
        
      </div>
      
      
    </div> */}
    </>
  );
}

export default Mainpage;
