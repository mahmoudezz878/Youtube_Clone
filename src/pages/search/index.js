import Header from "../../Compnents/Header";
import Sidebar from "../../Compnents/Sidebar";
import Search from "../../Compnents/Search";
import Smallsidebar from './../../Compnents/smallsidebar/Smallsidebar';
const SearchPage = () => {
  return (
    <>
      <Header />
      <div className="app__page">
        <Sidebar />
        <Smallsidebar />
        <Search />
      </div>
    </>
  );
};

export default SearchPage;
