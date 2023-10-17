import './App.css';
import logo from'./images/logo.svg'
import computer from './images/image-computer.png'
import mobComp from './images/image-devices.png'
import card1 from './images/icon-blacklist.svg'
import card3 from './images/icon-preview.svg'
import card2 from './images/icon-text.svg'
import logo1 from './images/logo-google.png'
import logo2 from './images/logo-hp.png'
import logo3 from './images/logo-ibm.png'
import logo4 from './images/logo-microsoft.png'
import logo5 from './images/logo-vector-graphics.png'
import social1 from './images/icon-facebook.svg'
import social2 from './images/icon-twitter.svg'
import social3 from './images/icon-instagram.svg'


function App() {
  return (
    <div className="App">

      <div className='intro'>
        <img src={logo} alt='logoImg'/>
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices</p>
        <div className='buttons'>
          <button>Dowload for iOS</button>
          <button>Dowload for Mac</button>
        </div>
      </div>

      <div className='track'>
        <h1>Keep track of your snippets</h1>
        <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>

        <div className='details'>
          <img className='left' src = {computer} alt='computerImg'/>

          <div className='right'>
             <p className='highlight'>Quick Search</p>
             <p>Easily search your snippets by content, category, web address, application, and more.</p>
             <p className='highlight'>iCloud Sync</p>
             <p>Instantly saves and syncs snippets across all your devices.</p>
             <p className='highlight'>Complete History</p>
             <p>Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>

      <div className='clipboard'>
        <h1>Access Clipboard anywhere </h1>
        <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        <img src={mobComp} alt='devices-images'/>
      </div>

      <div className='workflow'>
        <h1>Supercharge your workflow</h1>
        <p>We’ve got the tools to boost your productivity.</p>
        <div className='cards'>
          <div className='card' >
            <img  src={card1} alt='card1Img'/>
            <p className='highlight'>Create blacklists</p>
            <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
          </div>
          <div className='card' >
            <img  src={card2} alt='card2Img'/>
            <p className='highlight'>Plain text snippets</p>
            <p>Remove unwanted formatting from copied text for a consistent look.</p>
          </div>
          <div className='card' >
            <img  src={card3} alt='card3Img'/>
            <p className='highlight'>Sneak preview</p>
            <p>Quick preview of all snippets on your Clipboard for easy access.</p>
          </div>
        </div>
      </div>

      <div className='companies'>
        <img src={logo1} alt="google"/>
        <img src={logo2} alt="hp"/>
        <img src={logo3} alt="ibm"/>
        <img src={logo4} alt="microsoft"/>
        <img src={logo5} alt="vecctor-graphics"/>
      </div>
      
      <div className='clip'>
      <h1>Clipboard for iOS and Mac OS</h1>
      <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
      <div className='buttons'>
        <button>Dowload for iOS</button>
        <button>Dowload for Mac</button>
      </div>
      </div>

      <footer>
        <img src={logo} alt='logo'/>
        <div className = 'links'>
          <p >FAQs</p>
          <p>Privacy Policy</p>
          <p >Install Guide</p>
          <p>Contact Us</p>
          <p >Press Kit</p>
        </div>

        <div className='social-links'>
            <img src={social1} alt='facebook'/>
            <img src={social2} alt='twiter'/>
            <img src={social3} alt='instagram'/>
        </div>
      </footer>

    </div>
  );
}

export default App;
