import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Embedly from 'react-embedly';
import { Jumbotron } from 'reactstrap';
import './App.css';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
              <a className="navbar-brand"></a>
              <form className="form-inline my-2">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="submit">Search</button>
              </form>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Organizations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Download</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Jumbotron fluid>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="display-2 text-center text-white">Fights At Your Fingertips</h1>
                  <p className="display-4 lead text-center text-light">Never miss a fight again.</p>
                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
        <div className="container">
          <h2 className="display-2 text-center text-body">News &amp; Highlights</h2>
          <div className="row">
            <div className="col-sm">  
            <blockquote class="embedly-card" data-card-theme="dark"><h4><a href="https://mmajunkie.usatoday.com/2020/01/ufc-249-tony-ferguson-instagram-khabib-nurmagomedov-conor-mcgregor">Khabib vs. Conor 2? Tony Ferguson reminds everyone who they're sleeping on</a></h4><p>By: Farah Hannoun, The Blue Corner | January 24, 2020 9:15 pm Tony Ferguson says people should pump the brakes on all the Khabib Nurmagomedov vs. Conor McGregor rematch talk. UFC lightweight champion Nurmagomedov has arguably the stiffest test of his career ahead of him at UFC 249 in Brooklyn, N.Y., yet people are already looking past his bout with Ferguson and talking about "The Eagle's" next title defense.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
            <Embedly url="//cdn.embedly.com/widgets/platform.js" charset="UTF-8" />
            
            </div>
            <div className="col-sm">
              <blockquote className="embedly-card"><h4><a href="https://mmajunkie.usatoday.com/2019/12/khabib-nurmagomedov-vs-tony-ferguson-most-important-fight-ufc-history-father-says">Khabib Nurmagomedov's father on Tony Ferguson fight: Nothing like this in UFC history</a></h4><p>UFC lightweight champion Khabib Nurmagomedov has been part of many big fights, but his father thinks none are bigger than his next one with Tony Ferguson. Arguably the most anticipated fight in UFC history, Nurmagomedov (28-0 MMA, 12-0 UFC) is set once again to clash with Ferguson (25-3 MMA, 15-1 UFC) on April 18 at UFC 249.</p></blockquote>
              <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
            </div>
            <div className="col-sm">
              <blockquote className="embedly-card"><h4><a href="https://www.washingtonpost.com/sports/2019/12/08/capital-one-arena-ufc-fight-nights-heavyweight-showdown-comes-down-final-seconds/">At Capital One Arena, UFC Fight Night's heavyweight showdown comes down to final seconds</a></h4><p>Alistair Overeem had heard the whispers about his age over the past few years, about whether he could make one final run at the UFC heavyweight title that had eluded him during his two-decade career.</p></blockquote>
              <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
            </div>
          </div>
        </div>


<hr className="py-3"/>
</React.Fragment>
    
//     <div className="accordion" id="accordionCustom">
//         <div className="card">
//           <div className="card-header" id="headingOne">
//             <h2 className="mb-0">
//               <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                 UFC Highlight Reel
//               </button>
//             </h2>
//           </div>
//           <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionCustom">
//             <div className="card-body embed-responsive embed-responsive-4by3">
//                 <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YNAxgB3_14g" allowfullscreen></iframe>
//             </div>
//             <p>The UFC is <strong>by far</strong> the leading organization for the worlds greatest elite fighters. Dominating the industry with the biggest events, most viewers, and highest fighter payouts, the league has grown exponentially in the last 5 years. This video showcases the talent and ferocity of mixed martial arts at the worlds highest level. Check out the video and watch these fighters go to war!
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingTwo">
//             <h2 className="mb-0">
//               <button className="btn btn-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                 One Championship Highlight Reel
//               </button>
//             </h2>
//           </div>
//           <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionCustom">
//             <div className="card-body embed-responsive embed-responsive-4by3">
//                 <iframe width="560" height="315" src="https://www.youtube.com/embed/DzNKoCljW-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             </div>
//             <p>ONE Championship currently has offices in Singapore, Tokyo, New York City, Los Angeles, Shanghai, Milan, Beijing, Bangkok, Manila, Jakarta, and Bangalore. Check out these highlights from the worlds premier fighting league. With some of the most talented and famed fighters from all disciplines as they showcase their skills in this 2019 highlights video. 
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingThree">
//             <h2 className="mb-0">
//               <button className="btn btn-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                 Boxing Highlight Reel
//               </button>
//             </h2>
//           </div>
//           <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionCustom">
//             <div className="card-body embed-responsive embed-responsive-4by3">
//                 <iframe width="560" height="315" src="https://www.youtube.com/embed/lRHYwB_5Op0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             </div>
//             <p>2019 was a good year for Boxing around the world. Historically the worlds most watched fighting style, American Boxing is a staple for all combat sports enthusiasts. From the turn of the century until present, boxing has a rich history and is even an official sport in the Olympic games. Check out this video of some of the best fights, and knockouts of the year! 
//             </p>
//           </div>
//         </div>
//       </div>    

// <hr className="py-5"/>

//     <div className="container">
//         <div className="row">
//             <div className="col">
//                 <h1 className="text-center">With our app<br/>No matter where you are, find the fight you're<br/>looking for at the tip of your fingers.</h1>
//                 <p className="text-center">With the app you can quickly see what fights are happening and where you can watch them.</p>
//                 <div className="row">
//                         <div className="col">
//                           <div className="text-center">
//                             <button className="btn btn-dark" id="singlebutton">Download</button>
//                           </div>
//                         </div>
//                       </div>
//             </div>
//         </div>
//     </div>

// <hr className="py-5"/>

//     <div className="container">
//       <h2>Send us your Feedback</h2>
//         <form className="message">
//             <div className="form-group form-row">
//                     <div className="col-md-4"></div>
//                     <textarea className="form-control" placeholder="Message"></textarea>
//                 </div>
//             <div className="form-group form-row">
//                 <div className="col-md-4 col-md-offset-4">
//                     <input type="text" className="form-control" placeholder="Name"/>
//                 </div>
//                 <div className="col-md-4 col-md-offset-4">
//                     <input type="text" className="form-control" placeholder="Email"/>
//                 </div>
//                 <div className="col-md-4 col-md-offset-8">
//                     <button type="button" className="btn btn-dark btn-block">submit</button>
//                 </div>
//             </div>
//         </form>
//     </div>

// <hr className="py-5"/>

//     <footer className="site-footer">
//         <div className="container">  
//             <div className="row">
//                 <div className="col-sm-6 col-sm-5 text-center">
//                     <div className="footer-links">
//                         <h5>Links</h5>
//                         <ul>
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">Organizations</a></li>
//                             <li><a href="#">Events</a></li>
//                             <li><a href="#">Download</a></li>
//                             <li><a href="#">About</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="col-6 col-sm-5 text-center">
//                     <h5>Social</h5>
//                     <a className="btn btn-lg btn-social-icon btn-instagram" href="http://instagram.com/"><i
//                             className="fab fa-instagram"></i></a>
//                     <a className="btn btn-lg btn-social-icon btn-facebook" href="http://facebook.com/"><i
//                             className="fab fa-facebook"></i></a>
//                     <a className="btn btn-lg btn-social-icon btn-twitter" href="http://twitter.com/"><i
//                             className="fab fa-twitter"></i></a>
//                     <a className="btn btn-lg btn-social-icon btn-youtube" href="http://youtube.com/"><i
//                             className="fab fa-youtube"></i></a>
//                 </div>
//                 <div className="col text-center">
//                     Tel: 1-206-555-1234<br />
//                     Email: theniceguynick@gmail.com
//                 </div>
//             </div> 
//         </div> 
//     </footer> 
    );
    }
}

export default App;
