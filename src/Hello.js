// jsx
// 파일명과 함수명같아야함.

function Hello() {
  return (
    // 부모없이 자식만2명이면 안되는 법칙.. 빈칸<>,</>도 부모가능
    <>
      <h2>Hello Hello</h2>
      <h3>Welcome to My Hello</h3>
      <p>나는 컴퍼넌트 입니다.</p>
    </>
  );
}

//  export default function Hello() {
// export default Hello; 를 따로쓰지 않고 네임설정시 export default붙여주면 내보내기가능
// }
export default Hello;
// 내보내기
