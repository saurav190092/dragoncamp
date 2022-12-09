import './newHomeTop.css';
import playbtn from './assets/PlayButton.png';
import baby from './assets/baby.png';
import baby2 from './assets/baby2.png';
import baby3 from './assets/baby3.png';
import bgmain from './assets/bgmain.png';
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'

function NewTopHome() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="toph1">PLAY FREE TRIVIA AND WIN</h1>
        <div className="innerContainer">
          <div className="left">
            <div className="imgplaybtn">
                <div className="imgbox">
                <a href="https://twitter.com/myDragonCamp" className='smsocial'>
                  <img  src={twitter} alt="" />
                </a>
                <a href="">
                  <img className='playimg' src={playbtn} alt="" />
                </a>
                <a href="https://www.instagram.com/mydragoncamp/" className='smsocial'>
                  <img src={instagram} alt="" /> 
                </a>
                </div>
            <div className="social">
              <a href="https://twitter.com/myDragonCamp">
                <img src={twitter} alt="" />
               
              </a>
              <a href="https://www.instagram.com/mydragoncamp/">
              <img src={instagram} alt="" />
               
              </a>
              
            </div>
            </div>
            <div>
              <h5>Play our trivia game to win stars</h5>
              <p>
                Every 5 stars you win 1 free entry into our <br />
                daily/weekly contests where you can win <br /> prizes like food,
                gift cards and <br />
                DragonCamp merchandise! Win your <br /> own green DragonCamp
                onesie. Follow <br /> us on social to see if you've won!
              </p>
            </div>
          </div>
          <div className="right">
            <img src={baby} alt="" />
            <img src={baby3} alt="" />
            <img src={baby2} alt="" />
          </div>
        </div>
        <img src={bgmain} className="bg" alt="" />
      </div>
    </div>
  );
}

export default NewTopHome;
