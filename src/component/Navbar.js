import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"

import { Link } from "react-router-dom"; 

const Navbar = () => {
    const menuList = ['여성', '남성', '아동', 'Sale', 'Home']

const navigate = useNavigate()

const goToLogin=()=>{
navigate('/login')
};
const search = (event) => {
  if (event.key === "Enter") {
    // 입력한 검색어를 읽어와서 url을 바꿔준다
    let keyword = event.target.value;
  
    navigate(`/?q=${keyword}`)
  }
};
  return (
    <div>
      <div>
<div className="login-button" onClick={goToLogin}>
      <FontAwesomeIcon icon={faUser} />
      <div>로그인</div>
      </div>
      </div>
      <div className="nav-section">
                <Link to="/">
                    <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png" alt="H&M 로고" />
                </Link>
            </div>
      <div className="menu-area">
<ul className="menu-list">
{menuList.map((menu) => (
    <li>{menu}</li>

))}

</ul>
<div className="search">
<FontAwesomeIcon icon={faSearch} />
<input type="text" onKeyPress={search} />
</div>
      </div>
    </div>
  );
};

export default Navbar;
