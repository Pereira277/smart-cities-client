import BottomNav from "../components/BottomNav";
import IssueList from "../components/IssuesList";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <IssueList />
      <BottomNav />
    </div>
  );
}

export default Home;
