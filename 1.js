function sum_cut(i, sum, cut, min_arr) {
  let ans;
  let idx;
  while (sum < cut) {
      sum += min_arr[i];
      if (sum + min_arr[i + 1] > cut ) {
          ans = sum;
          idx = i;
          sum = 0;
          break;
      }
    }
      console.log(ans,idx);
      return {first : ans, second : idx};
      
  }

  function quiet_feel(min_arr, n) {
      min_arr.sort((a, b) => a - b);
      let sum = 0;
      let sum_cut_i = sum_cut();
      let i_idx = 0;
      let sum_arr = [];
      for (let i of min_arr) {
          sum += i;
      }
      let cut = Math.floor(sum / n);
      sum = 0;
      i = 0;
     // console.log(i, sum, cut, min_arr);
      while (i != min_arr.length) {
          sum_arr.push(sum_cut(i, sum, cut, min_arr));
          sum = 0;
    
          i++;
      }
     console.log(sum_cut_i.first + "here");

      return sum;
  }
  let min_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let n = 3;
  console.log(quiet_feel(min_arr, n));