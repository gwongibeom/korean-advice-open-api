# 한국어 명언 API 📚

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

## 상업적 사용 문의

한국어 명언 API는 불법(ex 불법도박) 및 차별적 상업 사이트 사용 방지 및 원활한 운영을 위해 커스텀 라이센스를 사용하고 있습니다.

상업적 사용시 아래 이메일로 문의 바랍니다.

```
k201gun@kakao.com
```
