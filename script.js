import { check } from 'k6';
import http from 'k6/http';

// create const options
export const options = {
  // virtual users
  stages: [
    { duration: "30s", rps: 1 },
    { duration: "30s", rps: 10 },
    { duration: "30s", rps: 100 },
    { duration: "30s", rps: 1000 },
  ]
};

// main func()
export default function () {
  const res1 = http.get(`http://ec2-52-53-171-73.us-west-1.compute.amazonaws.com:9000/?${Math.floor(Math.random() * 10000000)}`);

  // const res2 = http.get(`http://ec2-52-53-171-73.us-west-1.compute.amazonaws.com:9000/api/products/${Math.floor(Math.random() * 10000000)}`)

  // check(res2, {
  //   'status 200': (r) => r.status == 200,
  //   'transaction time OK': (r) => r.timings.duration < 200,
  // });

  check(res1, {
    'status 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
}