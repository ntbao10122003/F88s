import React from "react";
import { Link } from "react-router-dom";
const Login = ({ onClose,onSwitch  }) => {
  return (
    <div className="box-sign-in">
      <div className="bg-ovflow"></div>
      <div className="signInpassNext">
        <div className="close-form" onClick={onClose}></div>
        <div className="logoImages">
          <img
            src="https://gwfd.qatgwawm.net/system-requirement/Web.PortalNew/UK255-01/99cdae96e2/images/5f0bb3af787ef0b115a9ad12fb098cc1.png"
            alt=""
          />
        </div>
        <form>
          <div className="Item-form-resgeter">
            <label>Tên Tài Khoản:</label>
            <div className="item-flex-resgeter">
              <img
              src="/b2c57a84ceed3ce0c246bd45e8cb25af.png"
              alt=""
            />
            <input type="text" required />
            </div>
          </div>
          <div className="Item-form-resgeter">
            <label>Mật Khẩu:</label>
            <div className="item-flex-resgeter">
            <img
              src="/92a08df08e28849cad42daed1b65c369.png"
              alt=""
            />
            <input type="password" required />
            </div>
          </div>

          <button className="btn-submit-sigin"  type="submit">Đăng Nhập</button>
          <div className="btn-next-signup">
            <span>
              Bạn chưa có tài khoản? <Link to="/register" onClick={(e) => { e.preventDefault(); onSwitch(); }}>Đăng ký</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
