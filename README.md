<div align="center">

# 🫥익명 사회 웹사이트 및 개인 블로그 프로젝트🫥

## 작성 동기 및 소개

#### 기술블로그를 작성하기 위해서 플랫폼을 선택하던중, 저에게는 글을 작성하는 것 뿐만이 아닌, 삶에서 오는 감각적인 부분들과 생각들 그리고 컴퓨터와 보내는 시간들에서 얻게되는 것 들을 아카이빙 하기 위한 플랫폼을 한곳에서 보고싶어서 이런 간소한 공간을 작성하게 되었습니다. 그리고 다른 이유는...

#### 이러한 곳을 필요로 하는 사람은 많다고 봅니다. 예를 들어 사진과 글 그리고 비디오를 저장하는 인스타그램과 페이스북이 좋은 예라고 생각이 듭니다. 하지만 불특정 다수에게 노출이 되어 데이터는 저장되어지고 그 데이터들이 모여서 또다른 대량 소비를 만들어 내는 결과를 낳습니다. 거대기업들은 경제 성장과 소비자의 욕구 증가를 데이터로서 조종한다고 믿습니다. 또한 이러한 대량 소비는 현재 현대 사회에 대두되는 환경 오염을 유발하며, 양극화를 심화시킬수 있습니다. 이는 사회 갈등과 사회 불안정성 그리고 결국에는 경제 성장 저해를 불러 일으킨다고 알고있습니다.

#### 우리의 삶은 쉽게 대량 소비의 문화에서 벗어날수 없는것을 저는 물론 인정하지만, 가끔은 그곳에서 벗어나서, 익명의 사람들에게 자신의 감정과 생각을 공유하는 곳을 제공 하고싶었습니다.

---

## 사용된 기술

<img src="https://img.shields.io/badge/Yarn-2c8ebb?style=flat-square&logo=yarn&logoColor=000000"/><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=000000"/><img src="https://img.shields.io/badge/Styled-Components-DB7093?style=flat-square&logo=StyledComponents&logoColor=DB7093"/><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000000"/><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js"/><img src="https://img.shields.io/badge/Clerk-6c47ff?style=flat-square&logo=Clerk"/><img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=ffffff"/><img src="https://img.shields.io/badge/tensorflow-FF6F00?style=flat-square&logo=tensorflow&logoColor=000000"/><img src="https://img.shields.io/badge/Spotify-1DB954?style=flat-square&logo=spotify&logoColor=000000"/>

###### 🔧 현재 vercel에 배포가 되어 실제 운영이 되고 있습니다. https://n0wlk.com

###### 🔧 Auth 기능은 <img src="https://img.shields.io/badge/Clerk-6c47ff?style=flat-square&logo=Clerk"/>라이브러리로 최대한 보안을 위한 방법을 택했습니다.

###### 🔧 첫번째 핵심 기능은 랜딩페이지에서 자신의 얼굴을 익명인들의 한명이라고 표현하고 싶었습니다. 그래서 <img src="https://img.shields.io/badge/tensorflow-FF6F00?style=flat-square&logo=tensorflow&logoColor=000000"/> 라이브러리를 웹캠으로 사람얼굴을 인지시킨후, 메쉬화 시키는 것을 작성했습니다.

###### 🔧 두번째 핵심 기능은 eye 페이지에서 눈으로 볼수느낄수 있는 사진들을 보여주고 싶었습니다. 그런데 그 사진들은 제가 알지 못하는 사람들의 흑백사진으로만 이루어져 있고, 이곳은 오직 저 혼자만 업로드를 할수있는 곳 입니다. 이미지 최적화를 위해서 Next.js에서 권하는 방법인 <Image/> 태그를 사용하였습니다.

###### 🔧 세번째 핵심 기능은 brain 페이지이고, 이곳은 생각을 적고 정리해서 아카이빙 하는 블로그 페이지입니다. 이곳은 누구나 업로드를 할 수 있으며, 업로드 삭제 수정을 할 수 있으며, <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=000000"/>에 데이터는 저장 됩니다.

###### 🔧 네번째 핵심 기능은 body 페이지에서 사용된 <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=ffffff"/> 라이브러리 입니다. 3D 스캔이 된 어떤 한 사람의 집의 모습입니다.

###### 🔧 마지막 핵심 기능은 ear 페이지의 spotify 공유 페이지 입니다. <img src="https://img.shields.io/badge/Spotify-1DB954?style=flat-square&logo=spotify&logoColor=000000"/> open API 를 사용해서 사용자가 음악을 공유할수 있으며, 함께 글도 작성 할 수 있습니다. ( 향후 apple music도 지원 예정)
