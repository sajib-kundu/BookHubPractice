import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import Sorting from './components/Sorting/Sorting'
import BookList from './components/Books/BookList';

const App = () => {
  return (
    <>
        <Header/>
        <main>
          <section className="container mt-2"> 
          <div className="row">
              <SideBar/>
            
              <div className="col-9">
                <Sorting/>
                <BookList/>

              </div>

          </div>

          </section>
        </main>

        <Footer/>


    </>
  );
}

export default App;
