# 한국어 명언 API 📚

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgwongibeom%2Fkorean-advice-open-api&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false)](https://hits.seeyoufarm.com)

한국어 명언 API는 아래와 같은 기능을 제공하는 API 입니다.

- 랜덤으로 한국어 명언 불러오기
- ~조건으로 한국어 명언 불러오기~

## 사용방법 ❓

### 랜덤 명언 불러오기

`https://korean-advice-open-api.vercel.app/api/advice`

위 링크로 get 요청 보내시면 됩니다.

#### 응답 예시:

```json
{
  "author": "에이브러햄 링컨",
  "authorProfile": "미국 16대 대통령",
  "message": "반드시 이겨야 하는 건 아니지만 진실할 필요는 있다. 반드시 성공해야 하는 건 아니지만, 소신을 가지고 살아야 할 필요는 있다."
}
```

## 기여 🤝

포크 후 `/api/_advices.ts`에 추가하고 싶은 명언을 추가 한 뒤 PR 보내주세요.

## 오픈소스 사용 정보 🙏

초기 명언 리스트 : [chkim116/kadvice](https://github.com/chkim116/kadvice)

## 로컬 실행 방법 🏃

```bash
git clone https://github.com/gwongibeom/korean-advice-open-api.git
```

Install the Vercel CLI:

```bash
npm i -g vercel
```

Then run the app at the root of the repository:

```bash
vercel dev
```


## 기여자들
<a href="https://github.com/gwongibeom/korean-advice-open-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gwongibeom/korean-advice-open-api" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## 상업적 사용 문의 연락처

```
k201gun@kakao.com
```
