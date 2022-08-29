// import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Item from "./Item";
import User from "./User";
import User02 from "./User02";

function App() {
  const mySite = {
    linkName: "다음",
    link: "http://www.daum.net",
    target: "_blank",
  };
  const myStyle = {
    fontSize: "100px",
    color: "red",
  };
  return (
    <div className="App">
      {/* class는 react에서 사용하고있는 예약어 className으로쓰길권장 id는 ㄱㅊ */}
      <Hello></Hello>
      <hr />
      <p style={myStyle}>{100 + 1}</p>
      <p style={{ fontSize: "100px", color: "red" }}>{100 + 1}</p>
      {/* 100+1과같은 연산텍스트입력시 js로 연산시킨 값을 출력하고 싶을때 태그안에 {}에 식넣어주기 ex ) <p>{100 + 1}</p>*/}
      {/* style 직접넣을때 {}안으로 넣어js코드로 변경시킨후 {}오브젝트형태로변경 후 js에서css적용하는 코드처럼 똑같이입력 */}
      <hr />
      <a href={mySite.link} target={mySite.target}>
        {mySite.linkName}
      </a>
      <hr />
      <User name="ZYZYRO" say="Hellog" />
      <User name="ROOTOO" say="HIHIHIHI" />
      <hr />
      <User02 name="Musk" say="To the Moon" />
      <User02 name="Jops" say="Apple" />
      {/* react에서는 무조건 열고닫아야함, <>한개인태그(br,hr,img등)는 /포함시켜야함
      열고닫는태그 하나에 /만써도 닫기가능 ex)<User />*/}
      <ul>
        <Item
          imgSrc="https://hotelillua.com/wp-content/uploads/2022/08/%EC%96%B4%ED%85%80-%EA%B2%9F%EC%96%B4%EC%9B%A8%EC%9D%B4_pkg-837x558.jpg"
          title="어텀 겟어웨이"
          desc="선선한 가을 바람과 함께 즐기는 낭만적인 여행"
          reservation="22.09.04 - 22.12.22"
          days="22.09.04 - 22.12.22"
        />
        <Item
          imgSrc="https://hotelillua.com/wp-content/uploads/2022/08/brooke-lark-aGjP08-HbYY-unsplash-837x558.jpg"
          title="스위트 딜라이트"
          desc="일상에서 벗어나 달콤한 하루를 즐겨보세요."
          reservation="22.09.04 - 22.12.22"
          days="22.09.04 - 22.12.22"
        />
        <Item
          imgSrc="https://hotelillua.com/wp-content/uploads/2022/05/%EC%9B%90%EC%8D%B8%EB%A8%B8%EB%82%98%EC%9D%B4%ED%8A%B8_pkg-%EB%B3%B5%EC%82%AC-838x558.jpg"
          title="원 썸머 나이트"
          desc="환상적인 오션뷰와 함께 피맥을 즐겨보세요."
          reservation="22.09.04 - 22.12.22"
          days="22.09.04 - 22.12.22"
        />
      </ul>
    </div>
  );
}

export default App;
