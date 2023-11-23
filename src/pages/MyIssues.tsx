import BottomNav from "../components/BottomNav";
import MyIssuesList from "../components/MyIssuesList";
import Navbar from "../components/Navbar";

function MyIssues() {
  return (
    <div>
      <Navbar />
      <MyIssuesList />
      <BottomNav />
    </div>
  );
}

export default MyIssues;
