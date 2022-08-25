//배포용

//export const url = 'https://api.hyejun.co.kr'

//테스트용(local back)

export const url =
  process.env.NODE_ENV !== "development"
    ? "http://localhost:3000"
    : "http://3.39.42.89";
console.log(url, "url====");
