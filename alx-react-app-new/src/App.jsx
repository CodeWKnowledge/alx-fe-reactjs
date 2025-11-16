import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Header />

      <WelcomeMessage />
      <Counter/>

      <UserProfile name=" Knowledge" age="17" bio="Aspiring Software Developer" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
