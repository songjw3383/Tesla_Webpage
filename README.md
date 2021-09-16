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
### 1. 메인 페이지(Home.js)
![Main](https://user-images.githubusercontent.com/56250064/127433589-5dd16a1c-866c-4bbb-a884-37482a884694.png)
- 반응형 네비게이션 바 기능 (1280px).
- react-reveal 의 Fade 모듈을 사용하여 텍스트에 애니메이션 효과 적용.
- Home.js 에서 각 세션별로 정의된 값을 Section.js 에서 처리 하였음.
- 메뉴바의 항목들은 carslice.js에 정의된 초기값을 state로 받아와 처리.
<hr/>

### 2. Roadster(Roadster.js)
![Roadster](https://user-images.githubusercontent.com/56250064/127465889-fd233357-2f6b-4543-9b63-ee649baa5ab2.png)
- 반응형 웹에 따라 유기적으로 UI 요소들이 배치되도록 설계.
- 첫 메인 페이지(세션)은 Roadster.js 에서 처리, 그 외 내용은 RoadsterInfo.js에서 처리 하도록 분리
- react-reveal의 Slide 및 Fade 모듈을 사용해 텍스트와 사진에 애니메이션 효과 적용.
- Vimeo 영상표시를 위해 u-wave/react-vimeo 의 Vimeo 모듈 사용.
- Roadster의 spec 관련 내용은 roadsterSlice.js에서 처리하도록 구현. 

#### Example
<hr/>

![roadster](https://user-images.githubusercontent.com/56250064/127466983-5bd0fe01-2d62-4033-9600-c1ead78897fd.gif)

### 3. CyberTruck (Cybertruck.js)
![Cybertruck](https://user-images.githubusercontent.com/56250064/127509755-e2b09bd1-15a1-4a4d-9242-b20016f41bf6.png)
- 반응형 웹에 따라 유기적으로 UI 요소들이 배치되도록 설계.
- Slider 와 Spec부분을 나누어서 설계
1. CyberTruck.js : Slick을 사용하여 이미지 슬라이드 기능을 구현.
2. SpecInfo.js : specSlice.js 에서 처리하도록 구현.
> Radiobutton에 따른 스펙 옵션 선택 부분은 추후에 다시 수정할 예정.
- react-reveal의 Fade 모듈을 사용하여 텍스트와 이미지에 애니메이션 효과 적용


#### Example
<hr/>

![Cybertruck_gif](https://user-images.githubusercontent.com/56250064/127515338-388b03ba-c0c8-4258-beda-34af19cc7e9e.gif)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsongjw3383%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
