import { check } from 'k6';
import http from 'k6/http';

// create const options
export const options = {
  // virtual users
  // vus: 5,
  // 4 level from 1 - 1000
  stages: [
    { duration: "10m", target: 1 },
    { duration: "10m", target: 10 },
    { duration: "10m", target: 100 },
    { duration: "10m", target: 1000 }
  ],
  rps: 1000,
};

// main func()
export default function () {
  // const res1 = http.get(`http://localhost:9000/?${Math.floor(Math.random() * 10000000)}`);

  const res2 = http.get(`http://localhost:9000/api/products/${Math.floor(Math.random() * 10000000)}`)

  check(res2, {
    'status 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });

  // check(res1, {
  //   'status 200': (r) => r.status == 200,
  //   'transaction time OK': (r) => r.timings.duration < 200,
  // });
}