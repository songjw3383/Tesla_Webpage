# 테슬라 웹페이지 구현 (Tesla Webpage cloning)
테슬라의 공식홈페이지(https://www.tesla.com/) 를 리액트를 사용하여 구현해보고, 리덕스를 사용해봄으로써 사용 기술을 익히고 효율적인 상태관리를 적용시켜 볼 예정이다.

또한 SPA ( Single Page Application) 웹 구성을 하기 위하여 react-router-dom 을 사용하고, 반응형 웹페이지를 목적으로 개발할 예정이다.


- **기간** :
07.21~

- **개발인원** :
1 명

- **페이지 구성 (flow chart)** (진행중)

![flowchart](https://user-images.githubusercontent.com/56250064/127433885-43af16fb-1d7e-4899-a370-8c8f28004d34.png)


## 사용기술
1. ReactJs
2. react-router-dom 
3. Redux
4. Styled-component
5. react-slick ( for slider )
6. react-reveal ( for page content animation )

## 상세 페이지 (진행 중)
**메인 페이지(Home.js)**
![Main](https://user-images.githubusercontent.com/56250064/127433589-5dd16a1c-866c-4bbb-a884-37482a884694.png)
- 반응형 네비게이션 바 기능 (1280px).
- react-reveal 의 Fade 모듈을 사용하여 텍스트에 애니메이션 효과 적용.
- Home.js 에서 각 세션별로 정의된 값을 Section.js 에서 처리 하였음.
- 메뉴바의 항목들은 carslice.js에 정의된 초기값을 state로 받아와 처리.
<hr/>

**Roadster(Roadster.js)**
![Roadster](https://user-images.githubusercontent.com/56250064/127465889-fd233357-2f6b-4543-9b63-ee649baa5ab2.png)
- 반응형 웹에 따라 유기적으로 UI 요소들이 배치되도록 설계.
- 첫 메인 페이지(세션)은 Roadster.js 에서 처리, 그 외 내용은 RoadsterInfo.js에서 처리 하도록 분리
- react-reveal의 Slide 및 Fade 모듈을 사용해 텍스트와 사진에 애니메이션 효과 적용.
- Vimeo 영상표시를 위해 u-wave/react-vimeo 의 Vimeo 모듈 사용.
- Roadster의 spec 관련 내용은 roadsterSlice.js에서 처리하도록 구현. 
<hr/>
*Example*
![roadster](https://user-images.githubusercontent.com/56250064/127465976-471dc103-b3f0-44e9-9c0f-a59aaa20c722.gif)

