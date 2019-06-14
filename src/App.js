import React, {
  Component
} from 'react';
import './style.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
// import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Content />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;