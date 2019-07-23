# HTML

## HTML 속성

* 글로벌속성 : 모든 태그에 포함된 속성 <=> 지역속성 : 특정 태그에만 포함된 속성
* 필수속성 : 해당 태그에서 반드시 사용해야 하는 속성 <=> 선택속성 : 반드시 사용하지 않아도 되는 속성
* id와 class는 글로벌 속성

```html
<h1 id="title" class="main">Hello, HTML</h1>
```

## 빈태그

* 빈 태그는 내용이 없어서 종료 태그가 필요하지 않음

```html
<br>
<img src="">
<input type="">
```

## 텍스트 표현 태그

* b 태그 : 볼드체
* i 태그 : 이탤릭체
* u 태그 : 밑줄
* s 태그 : 취소선

```html
<p>
    <b>Lorem</b> <i>ipsum</i> dolor sit amet<br>
    <u>Lorem</u> <s>ipsum</s> dolor sit amet
</p>
```

* 단순 꾸미기가 아니라 의미가 내포된 경우 Symantic Markup 사용

```html
<b>굵은</b> vs <strong>중요한</strong>
<i>기울어진</i> vs <em>강조하는</em>
<u>밑줄친</u> vs <ins>새롭게 추가된</ins>
<s>중간선이 있는</s> vs <del>삭제된</del>
```

## a 태그

* href는 링크를 지정해주는데 외부링크와 내부링크가 가능하다.
* 내부링크는 내부에 특정 id값을 가진 태그로 이동시켜준다.
* target은 링크를 새창에 띄울지 현재창에 띄울지 정해주는 속성이다.

```html
<a href="http://www.naver.com/" target="_blank">네이버</a>
<a href="http://www.naver.com/" target="_self">네이버</a>
<a href="#introduce">자기소개로 이동하기</a>
<a href="#history">약력으로 이동하기</a>

<h1 id="introduce">나는 ...</h1>
<h1 id="history">1991년에 태어나...</h1>
```

## div 태그, span 태그

* 아무 의미 없는 태그 : div, span
* 스타일을 지정해주거나 서버에 보내는 데이터를 담기 위한 용도

```html
<div>
  Do you See? <span>This is Me.</span>
</div>
```

## ul 태그, ol 태그, dl 태그

* 순서가 따로 표시되지 않는 리스트

```html
<ul>
  <li> 콩나물</li>
  <li> 파</li>
  <li> 국간장</li>
</ul>
```

* 순서가 표시되는 리스트

```html
<ol>
  <li>냄비에 국물용 멸치를 넣고 한소끔 끓여 멸치 육수를 7컵(1,400ml) 만든다.</li>
  <li>콩나물을 넣고 뚜껑을 덮어 콩나물이 익을 때까지 끓인다.</li>
  <li>뚜껑을 열고 대파, 마늘, 고춧가루를 넣고 끓인다.</li>
</ol>
```

* 정의를 표현하는 리스트

```html
<dl>
  <dt>리플리 증후군</dt>
  <dd>허구의 세계를 진실이라 믿고 거짓된 말과 행동을 상습적으로 반복하는 반사회적 성격장애를 뜻하는 용어</dd>
  <dt>피그말리온 효과</dt>
  <dd>타인의 기대나 관심으로 인하여 능률이 오르거나 결과가 좋아지는 현상</dd>
  <dt>언더독 효과</dt>
  <dd>사람들이 약자라고 믿는 주체를 응원하게 되는 현상</dd>
</dl>
```

## img 태그

* src 속성 : img 태그의 필수 속성, 경로를 의미
* alt 속성 : img 의 대체 텍스트를 의미 웹접근성의 관점에서 반드시 써야함
* width/height 속성 : 둘중 하나만 정해줘도 비율에 맞게 크기가 변경됨

```html
<img src="./images/pizza.png" alt="피자">
```

## table 관련 태그


* table : 표를 나타내는 태그
* tr : 행을 나타내는 태그
* th : 제목 셀을 나타내는 태그
* td : 셀을 나타내는 태그

* caption: 표의 제목을 나타내는 태그
* thead: 제목 행을 그룹화하는 태그
* tbody: 본문 행을 그룹화하는 태그
* tfoot: 바닥 행을 그룹화하는 태그

```html
<table>
  <caption>Monthly Savings</caption>
  <thead>
      <tr>
          <th>Month</th>
          <th>Savings</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>January</td>
          <td>$100</td>
      </tr>
      <tr>
          <td>February</td>
          <td>$80</td>
      </tr>
  </tbody>
  <tfoot>
      <tr>
          <td>Sum</td>
          <td>$180</td>
      </tr>
  </tfoot>
</table>
```

## colspan, rowspan 속성

* 행과 열을 병합해주는 속성
* 시작영역의 태그에 병합할 행의 수만큼 지정해준다.
* 병합 되는 부분에는 아무것도 작성하지 않는다.
* 비워두면 알아서 처리한다.

```html
<thead>
<tr>
  <th rowspan="2">Grade.</th>
  <th rowspan="2">Point.</th>
  <th colspan="2">Strength.</th>
  <th rowspan="2">Percent.</th>
</tr>
<!-- 비워두면 알아서 처리 -->
<tr>
  <th>kg/mm</th>
  <th>lb/in</th>
</tr>
</thead>
```

## fieldset 태그, legend 태그, label 태그

* fieldset : 여러 개의 폼 요소를 그룹화하여 구조적으로 만들기 위해 사용
* legend : 폼 요소의 제목으로 fieldset 내부에 작성
* label : form 요소의 이름과 form 요소를 명시적으로 연결시켜주기 위해 사용
* form 요소의 id 속성값과 label의 for 속성값을 같게 적어주어야 함

```html
<form action="">
  <h1>Form 관련 요소</h1>
  <fieldset>
    <legend>기본 정보</legend>
    <label for="userid">아이디 : </label> <input type="text" placeholder="영문으로만 써주세요" id="userid"><br>
    <label for="userpw">비밀번호 : </label> <input type="password" id="userpw"><br>
    성별 : <label for="male">남자</label> <input type="radio" name="gender" id="male" checked>, <label for="female">여자</label> <input type="radio" name="gender" id="female"><br>
  </fieldset>
  <fieldset>
    <legend>부가 정보</legend>
    취미 : 영화 감상 <input type="checkbox" name="hobby" checked>, 음악 감상 <input type="checkbox" name="hobby">, 독서 <input type="checkbox" name="hobby"><br>
    프로필 사진 업로드 : <input type="file"><br>
    사는 지역 : <select>
      <option>서울</option>
      <option>경기</option>
      <option>강원</option>
      <option selected>제주</option>
    </select><br>
    자기소개 : <textarea cols="30" rows="5" placeholder="자기소개는 짧게 해주세요."></textarea><br>
    <button type="submit">전송</button>
    <button type="reset">취소</button>
  </fieldset>
</form>
```
