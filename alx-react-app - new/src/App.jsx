import WelcomeMessage from "./WelcomeMessage";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Header />

      <WelcomeMessage />

      <UserProfile name=" Knowledge" age="17" bio="Aspiring Software Developer" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
