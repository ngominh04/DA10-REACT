
import './App.css';
import DoiTac from './component/DoiTac';
import Footer from './component/Footer';
import GioiThieu from './component/GioiThieu';
import Header from './component/Header';
import LienHe from './component/LienHe';
import PhongKhach from './component/PhongKhach';
import SanPham from './component/SanPham';
import TinTuc from './component/TinTuc';
import TrangChu from './component/TrangChu';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="container-fuild">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<TrangChu></TrangChu>}></Route>
          <Route path='/gioithieu' element={<GioiThieu></GioiThieu>}></Route>
          <Route path='/sanpham' element={<SanPham></SanPham>}></Route>
          
          <Route path='/phongkhach' element={<PhongKhach/>}></Route>
          <Route path='/phongkhach-1' element={<PhongKhach></PhongKhach>}/>
          <Route path='/phongkhach-2' element={<PhongKhach></PhongKhach>}/>
          <Route path='/phongkhach-3' element={<PhongKhach></PhongKhach>}/>
          <Route path='/phongkhach-4' element={<PhongKhach></PhongKhach>}/>
          <Route path='/phongkhach-next' element={<PhongKhach></PhongKhach>}/>
          
          <Route path='/tintuc' element={<TinTuc/>}></Route>
          <Route path='/tintuc-1' element={<TinTuc/>}/>
          <Route path='/tintuc-2' element={<TinTuc/>}/>
          <Route path='/tintuc-3' element={<TinTuc/>}/>
          <Route path='/tintuc-4' element={<TinTuc/>}/>
          <Route path='/tintuc-next' element={<TinTuc/>}/>
          
          <Route path='/doitac' element={<DoiTac/>}></Route>
          <Route path='/lienhe' element={<LienHe/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
