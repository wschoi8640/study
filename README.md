# 마크업 체크리스트

* title은 페이지 대표할 수 있는 문구로

* header는 문서 전체를 기준으로 판단

* 내용이 적을때는 굳이 section 그룹화 할 필요가 없음

* 강조태그는 스타일보다 의미위주로 (스타일 안맞으면 css로)

* table에는 항상 caption 추가하기

* 이메일은 a 태그로 감싸서 이메일 하이퍼 텍스트 만들기

* 항목 표시 있다고 무조건 ul 사용하지 않기

* 전체를 포함하는 텍스트인것 같으면 밖으로 빼기 (마지막 경계에 있는 텍스트)

* 마지막 행에 개행하기

* th, td 에 scope 설정해서 읽는 방향 정해주기 (웹 접근성)

* &, <, > 등의 특수문자들은 HTML 엔티티코드로 작성해주어야 함

* 마지막 내용이라고 무조건 footer에 넣지 않기

* title은 ,공지사항 : 네이버쇼핑, 의 형식으로 사용하기

* 폰트 선언은 body 에 선언해주면 알아서 상속됨

* 헤딩태그는 항상 bold기 때문에 따로 선언할 필요가 없다.

* 특정 연속하는 child에만 margin을 주고 싶을때 전체를 주고 firstchild 로 삭제하거나 +연산자로 그룹화 한 다음 margin을 주면 조건화 가능

* float을 쓸지 inline-block을 쓸지 고민해서 정하기 

* 중첩 클래스를 함부로 사용하지 않을것 각 요소별로 클래스를 최대한 주는게 나음

* 한 요소에 같은 스타일의 축약형, 분리형을 중복해서 사용하지 않을것

* table width는 col group 사용해서 줄것

* table th가 병합되고 2층으로 나뉜 경우 scope에 colgroup으로 줘야함, scope col, row 정확하게 넣기 가로세로 확인하고

<img src="https://t1.daumcdn.net/cfile/tistory/2416EC49568B2C3935">

* 영역 높이값을 퉁쳐서 line-height로 주는 방식이 더 효율적인지 체크해보기 (원래 내가 하던 방식은 폰트사이즈 + 패딩 + 보더)

* legend 날리는 법은 따로 있음(내가 하던 방식은 표준 방식이 아니고 꼼수)

* input 여러개가 합쳐져서 하나의 입력을 받는 경우 첫번째 input에 label을 붙여주고 나머지 input에는 title 속성을 삽입시켜주기 (fieldset으로 묶지마라)

* 웹 접근성 연구소 (https://www.wah.or.kr:444/) 확인하기

* 확장프로그램 headingsmap, openWAX 사용하기

* dt, dd는 정의를 쓸때만 사용하지 않고 키, 값 연결하는 상황에도 사용함

* before, after는 리더기가 잘 못읽어줌 span이나 div를 그냥 사용하기

* 헤딩태그나 strong 상속되서 bold 날라가는거 체크하기

* 이미지에 alt는 최대한 정보를 확실하게 (카테고리만 넣지 말고 제목 전체)

* a 태그 안에 블록 요소가 들어가면 a 태그가 영역을 제대로 잡지 못하기 때문에 display:block 처리 해줘야함

* float 내용이 길어져서 흘러 넘치지 않도록 막아주는것 overflow:hidden 을 써야함

* 리셋 위치를 잘 못쓰면 그전에 했던게 다 날아간다.

* 리셋 쓰면 list-style, strong 태그 강조, bold 날아간다.

* hover는 클릭하는 요소에 직접 줄것 hover를 감싸는 태그가 빈태그인 경우 hover쪽 태그에 스타일을 주기 

* form 요소에 클래스 지정 및 스타일 지정하지말것 개발 과정에서 옮겨질 수 있음

* 스타일이 같다고 과다하게 묶지 말기

* 필수 요소라고 적혀 있지 않으면 굳이 required 달아주지 말기

* 중복될만한 클래스 명은 depth를 추가해서 중복 회피

* vertical-align은 블록에서 안먹힘

* table 스타일도 colgroup으로 선언하기

* 체크 박스는 묶어서 인라인 블록 처리하기 (갯수가 늘어나면 일부분만 밑으로 떨어질 수도 있음)

* img 태그는 vertical-align: top 을 해줘야 박스에서 안벗어남 (img태그에 주어지는 불필요한 여백을 제거해줌) (display:block도 가능)

* line-height 은 왠만하면 px로 쓰기 pc에서는 rem 지원하지 않음

* colgroup 공부하기

* 부모요소에 relative 걸고 자식요소에 absolute, top, left ... 사용하는 스타일 방식 사용해보기

* 부모요소부터 간격, 너비 css 좁혀나가고 자식요소부터 만들어나가지 않기

* a 태그에 target 속성도 고민해보기

* a 태그에 title 상황 봐가면서 넣기, 보통은 안넣음

* 인접한 요소끼리 float이 될 수 있게 하기

* middle 같은거 넣어서 따로 하지 말고 해보기

* padding을 주지말고 line-height 로 영역 설정하도록 해보기

* 인접하는 영역끼리 border가 있을 경우 한쪽은 지워줘야함

* caption에는 헤딩태그 줄 필요가 없음 캡션 자체가 제목

* scope col이랑 row 반대로 알고 있음

* price 부분 다시 다른 방법으로 해보기

* id는 잘 모르겠어도 왠만하면 단어 하나로 구성하지 말기

* input은 text-indent 사용해서 입력 규격 맞추기 하지만 두줄 이상 부터는 사용하지 않음 (첫줄에만 적용됨)

* 의미 있는 dl,ul,ol 태그인 경우에는 클래스를 하나 줘놓기

* 리스트는 자식으로 정해진 요소만 올 수 있음(a태그로 li 감싸면 안됨)

* ol 숫자 직접 입력해주고 숫자가 중요한 것 같으면 강조태그를 감싸주기

* float 뒤에 오는 요소들 (float 당하는 인접 요쇼들)은 block 상태가 아니므로 display 상태 주의해서 사용하기(영역이 안잡힐 수도 있음 block상태가 아니라서)

* absolute 사용할때 고정된 영역인지, 가변적인 영역인지 확인해서 쓰기(영역이 변경될 여지가 있는지)

* a태그가 헤딩 요소를 내포하고 있을 때에는 굳이 a태그 내부 이미지 태그에 alt 속성을 넣어줄 필요가 없다

* 분기를 필요할때는 사용하도록 하기

* clear 할 때 display:block 빼먹지 말기

* address 태그 사용하기

* hover 할때 span에 display:inline-block 없으면 밑줄 없애고 싶어도 안없어짐

* html, css 요소검사 하기

* hover가 있으면 그 태그에 꾸미는 요소나 내용 집어넣기 감싸는거에 말고

* blind는 caption안에서 슬때는 span을 생성해서 span안에서 처리해줘야 함

* article은 거의 사용하지 않으므로 사용을 지양하기

* caption을 사용할 때 위에 주어진 타이틀과 다르게 하기

* HTML의 문법상 특별한 의미를 지닌 문자들(>, <, &, 공백문자[ ], 따옴표)을 제외한 엔티티 캐릭터의 사용은 지양한다. 

* input 태그는 submit 할때 사용하고 나머지는 a태그나 button 태그를 사용하기

* back ground 속성은 축약형으로

* float 일때 block display 주지 않기

* 이미 주어진 초깃값을 다시 부여하지 않기

* 속성 값이 0 일때는 px를 붙이지 않고 표현하기

* th는 font-weight 기본값이 bold임

* bordercolor:transparent 사용하는 경우 생각해보기

* https://gsnedders.html5.org/outliner/ 아웃라인 검사해주는 사이트

* table에서 바깥 요소에 줄 수 있는 스타일은 바깥 요소에 주기

* border-width 를 이용해서 border 스타일 중복 사용 최소화 하기

* 겹치는 영역끼리 border 중복 주의하기 

* select에 title 주기

* button 태그에 cursor 효과를 추가하는게 좋을지 판단하기

* checkbox, radio의 경우 버튼과 label 을 묶어서 div로 처리하기

* float 해제할 때 clear 위치가 애매하면 float 요소끼리 묶어서 내부적으로 clear하는 방법 생각해보기

* 이미지가 들어가는 영역의 경우 이미지가 로딩되지 않는 상황도 생각해서 스타일링 하기

* heading 태그는 리더기가 제목만 읽어줄때 뿌리 내려가기 딱 좋을 정도로만 사용하기

* img 태그에 verical-aling:top 사용해서 영역 바깥으로 튀어나오는 일이 없게 하기

* 마크업 예시 참고 사이트 https://nuli.navercorp.com/

* inline 요소 띄어쓰기때문에 문제될때는 float하는 것도 생각해보기

* placeholder가 있으면 blindtext 넣어줄 필요 없음

* vertical-align은 inline요소 table-cell에 적용되는 요소 다른곳에서는 사용해도 안먹힘

* input 타이틀 클릭했을때 인풋으로 포커스가 갈 수 있도록 레이블 처리하기

* 헤딩태그나 타이틀 못쓰는 곳에서 제목을 쓸 경우 strong 사용 고려하기

* a 태그 처리된 경우 blindtext에서 링크라는 것을 굳이 알려줄 필요없음 

* hex코드 사용할때 소문자로 표시하기 

* 블록요소에 불필요하게 width:100% 주고있지 않은지 확인하기

* absolute로 영역 잡을시 left, right 안정했을때 content 길이에 따라 가변적으로 크기가 변하는지 확인하기(너비값 안준 경우)

* 다른 영역들이 absolute로 처리되어 있는 경우 어떤 영역들은 normal-flow로 둬도 되는 경우도 있으니 확인하기

* dummy텍스트도 태그로 감싸는것이 좋음
