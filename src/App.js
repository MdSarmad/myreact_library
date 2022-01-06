import React,{useState} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Modal from './Componets/Modal/Modal';
import Breadcrumbs from './Componets/Breadcrumb/Breadcrumbs';
import Breadcrumb from './Componets/Breadcrumb/Breadcrumb';
import MyButton from './Componets/Buttons/MyButton';
import Carousel from './Componets/Carousel/Carousel';
import { CarouselData as data } from './Componets/Carousel/CarouselData';
import Paginations from './Componets/Pagination/Paginations';
import './App.css';

function App() {

  // Modal status
  const[isOpen,SetIsOpen] = useState(false)

  // Close Modal function
  const closeModal = () => SetIsOpen(false)


  return (
    <>

        <div className="pagination">

          <Paginations/>

        </div>

        <div className="carousel">

          <Carousel 
            data={data} 
            slide={false}
            delay={3000}
            arrow={false}
            next={true}
            previous={true} 
            dots={true}
            width={"1000px"}
            height={"600px"}
            captionHeader={"Travel"}
            captionText={"Favourite Travel Pictures"} 
            // dark={false}

          />

        </div>

        <div className="buttons">

          <MyButton 
            type={"primary"}
            color={"black"}
            size={"large"}
            outline={false}
            block={false}
            borderRadius={"8px"}
            bgColor={"skyblue"}
            disable={true}
            >primary</MyButton>
          <MyButton type={"primary"}>Primary</MyButton>
          <MyButton type={"secondary"}>Secondary</MyButton>
          <MyButton type={"success"}>Success</MyButton>
          <MyButton type={"info"}>info</MyButton>
          <MyButton type={"warning"}>Warning</MyButton>
          <MyButton type={"danger"}>Danger</MyButton>

        </div>


        <div className="my-breadcrumbs">

          <Breadcrumbs 
            bgColor={"thistle"}
            fontSize={"25px"}
          >

            <Breadcrumb 
              href="#" 
              tag="a"  
              separator={"/"}
            >Home</Breadcrumb>
            <Breadcrumb href="#" tag="a" separator={"/"}>FirstPage</Breadcrumb>
            <Breadcrumb href="#" tag="a" separator={"/"}>SecondPage</Breadcrumb>
            <Breadcrumb href="#" tag="p" separator={"/"}>LastPage</Breadcrumb>

          </Breadcrumbs>
        </div>


      <div className="my-modal">

        <button onClick={()=>{SetIsOpen(true)}} className='open-modal'>Open Modal</button>
        <Modal
          open={isOpen}
          close={closeModal}
          headerBgColor={"rgb(70,100,85)"}
          title={"Modal Title"}
          titleColor={"rgb(0,0,0)"}
          titleFontSize={"30px"}
          bgColor={"rgba(90,85,68,0.8)"}
          fade={true}
          backdrop={true}
          fullscreen={"true"}
          size={"lg"}
          centered={false}
          scrollable={true}
          transition={true}
          cancel={"CANCEL"}
          submit={"SUBMIT"}
        >
          <p className='para'>A modal is a message box that is displayed on top of your screen.<br/>Modals put an overlay on the screen; therefore, they take visual precedence over all the other elements.</p>
        </Modal>

      </div>
    </>
  ); 
}

export default App;